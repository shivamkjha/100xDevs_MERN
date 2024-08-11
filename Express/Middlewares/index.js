// Before we proceed, lets add constraints to our route
// 1. User needs to send a kidneyld as a query param which should be a number from 1-2 (humans only has 2 kidneys)
// 2. User should send a username and password in headers (itsshivamjha - password)

//! Authentication + Input validaton
const express = require('express')
const app = express()

app.get("/health-checkup",(req,res)=>{
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "itsshivamjha" || password != "password"){
        res.status(403).json({
            msg : "User doesn't exist"
        })
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg : "Wrong inputs"
        })
    }

    res.send("Your Kidney is healthy");

});


//! Let's do it another way : using MIDDLEWARES
// It takes 3 inputs -> req, res and next

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "itsshivamjha" || password != "password") {
      res.status(403).json({
        msg: "User doesn't exist",
      });
    }else{
        next();
    }
}

function kidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
      res.status(411).json({
        msg: "Wrong inputs",
      });
    }else{
        next();
    }
}

let noOfCalls = 0;
function calculateRequestsMiddleware(req,res,next){
    // throw new error("error");
    
    noOfCalls++;
    console.log(noOfCalls)
    next();
}

// any route that comes after this line will have this middlware (calculateRequestMiddleware & express.json() middleware)
// using this way we don't have to write the middleware in each route
app.use(calculateRequestsMiddleware);
app.use(express.json());        // it calls a function internally

app.get("/health-checkup-2",userMiddleware,kidneyMiddleware,(req,res)=>{
    res.json({
        msg : "You are healthy",
        noOfCalls
    })
})

// doesn't require authentication
app.get("/demo-health-checkup", kidneyMiddleware,(req,res)=>{
    res.json({
      msg: "You are healthy",
      noOfCalls,
    });
})


// global catches : defined at the end (Error Handling Middlewares)
// if there is any exception in the code it should send this message and doesn't exposes ther 
// internal stuffs of the code
app.use( (err,req,res,next) =>{
    res.json({
        msg : "There is something wrong with our server, please try again later"
    })
})

app.listen(3000,()=>{
    console.log("Server is running at port : 3000");
})