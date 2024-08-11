//* Arrays, Objects , Array of Objects ,Function, Callbacks 
//! Arrays

const ages = [12, 23, 32, 55];
let noOfPeople = 0;

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
    noOfPeople++;
  }
}

console.log("Even age people " + noOfPeople);

//! Objects

const obj1 = {
  firstName: "Shivam",
  lastName: "Jha",
  age: 22,
};

console.log(obj1);

for (let key in obj1) {
  console.log(obj1[key]);
}

//! Array of Objects
const users = [
  { firstName: "Shivam", age: "22" },
  { firstName: "shubham", age: "24" },
  { firstName: "Raghav", age: "23" },
];

for (let i = 0; i < users.length; i++) {
  if (users[i]["age"] % 2 != 0) {
    users[i]["age"] = 20;
  }
}

console.log(users);

//! Functions

function sum1(a, b) {
  return a + b;
}

console.log(sum1(1, 2));

let sum2 = (a, b) => {
  return a + b;
};

console.log(sum1(1, 2));

//! Callbacks
//A callback function is a function that is passed as an argument to another function,
//  with the intention of being called or executed later within the containing function.

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
const ans = sum(1, 2, displayResult);

//! Set timeout

function greet() {
  console.log("Hello World!");
}

// call greet after 1 s
setTimeout(greet, 1000);
let IntervalId = setInterval(greet,1000);
setTimeout(()=>{clearInterval(IntervalId)},5000);     // after 5s stop the setInterval function 

// Internal working of setTimeout - a callback function
// setTimeout(fn , t){
//     wait for time t: 
//         fn();
// }