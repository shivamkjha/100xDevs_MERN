// npm install express
const express = require('express')

const port = 3000
const app = express()

function calculateSum(n){
    let sum = 0;
    for(let i =0;i<=n;i++){
        sum += i;
    }

    return sum;
}

app.get('/', (req,res) =>{
    const n1 = req.query.n1;
    const n2 = req.query.n2;
    const ans1 = calculateSum(n1);
    const ans2 = calculateSum(n2);

    res.send("Hii your answer is " +ans1.toString() +" & "+ ans2.toString());   // result send : String
})


app.listen(port,()=>{
    console.log(`Server listining on port : ${port}`)
})