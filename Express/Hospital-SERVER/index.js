const express = require('express')

const port = 3000
const app = express()

// Array of objects
const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
},
{
    name : "Bob",
    kidneys : [{
        healthy : true
    }]
}]


// It tells noOfKidneys, noOfHealthyKidneys and noOfUnhealthyKidneys
app.get("/",(req,res)=>{
    const johnKidneys = users[0]['kidneys'];
    const noOfKidneys = johnKidneys.length;

    let healthyKidneys = 0;
    for(let i = 0;i<noOfKidneys;i++){
        if(johnKidneys[i].healthy){
            healthyKidneys += 1;
        }
    }

    const unhealthyKidneys = noOfKidneys - healthyKidneys;

    res.json({
        noOfKidneys,
        healthyKidneys,
        unhealthyKidneys
    })
})



// add new kidneys
app.use(express.json())

app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;

    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : "Added new kidney as per body"
    })
})


// update every kidney of the user as healthy
app.put("/",(req,res)=>{
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }

    res.json({
        msg : "Updated every kidney as healthy"
    })
})


// remove unhealthy kidneys
app.delete("/",(req,res)=>{
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if(users[0].kidneys[i].healthy){
        newKidneys.push({
            healthy : true
        })
      }
    }

    users[0].kidneys = newKidneys;
    
    res.send({msg : "Deleted Unhealthy Kidneys"})
})





















// starting the server
app.listen(port,()=>{
    console.log(`Hospital Server listining on : ${port}`)
})