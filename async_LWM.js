
// Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming. 
// Sync   : sare kaam one by one shuru honge and khatm honge
// Async : sare kaam ek saath shuru kar do, jo pehle khatm ho return kar do 
// Async : is used when we don't know when the answer of a code will come
//* Async : setTimeout, setInterval, promises, fetch, axios
//? Event Loop : transfers content from mainstack to sidestack

console.log("hey 1");
console.log("hey 2");
setTimeout(function(){
    console.log("hey3");
},0);
console.log("hey 4");

//* To write async code : setTimeout, setInterval, promises, fetch, axios, XMLHttpRequest
//* Handle response : then catch, async await, callbacks

//! Callback : Function, works only when we get answer of async code

//! Promise
var ans = new Promise((res,rej)=>{
    // var n = Math.floor(Math.random);
    // var n = 2;
    if(n<5){
        return res();
    }else{
        return rej();
    }
})

// if resolved() => .then    if rejected() => .catch
ans
.then(function(){
    console.log("Resolved");
})
.catch(function(){
    console.log("Rejected");
})


//! Promise Chaining
var ans1 = new Promise((res,rej)=>{
    return res("Task 1");
})

var ans2 = ans1.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("Task 2");
    })
})

ans2
  .then(function (data) {
    console.log(data);
  })


//! async await
function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json(); 
    })
    .then(function(data){
        console.log(data);
    });
}

abcd();


async function abcd2(){
     let raw = await fetch(`https://randomuser.me/api/`);
     let ans = await raw.json();
     console.log(ans);
}
abcd2();

// Use cases :async await NODE db , fetch to fetch the data


    






