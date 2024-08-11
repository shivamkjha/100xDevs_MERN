//! Callback without promises
const fs = require("fs");

function readFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    printWhenDone(data);
  });
}

function printWhenDone(data) {
  console.log(data);
}

readFile(printWhenDone);

//! Callback with promises (Easy way to define and call async function )
function rf(){
    return new Promise(function(resolve){

        fs.readFile("a.txt","utf-8", function(err,data){
            resolve(data);
        })
    })
}

function whenDone(data){
    console.log(data);
}

let promiseReturns = rf();
console.log(promiseReturns);
promiseReturns.then(whenDone);  // when rf() returns the data -> then -> send the data to whenDone()

//? Promise Syntax 
//* Pending -> resolved / rejected
// let p = new Promise(function(resolve){

// }) 
// console.log(p);


//! async await : (replaces this ".then" thing)

async function test(){
    let value = await rf();
    // await works only inside of async functioin
    console.log(value);
}

test()