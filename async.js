// JS is single threaded but it can context switch or delegate
// JS does it using async functions
// Sync : one after the other
// Async : parallelize

// after 2s thread will run this
setTimeout(() => {
  findSum(100);
}, 2000);

function findSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += n;
  }
  console.log(sum);
}

// after 10s thread will run this
setTimeout(() => {
  findSum(100);
}, 10000);

console.log("Hello world");

//! Async functions provided by JS
// Reading a file : async fun (It takes time)

const fs = require("fs");
fs.readFile("a.txt", "utf-8",function(err,data){
    console.log(data);
});

console.log("This runs before the a.txt");

