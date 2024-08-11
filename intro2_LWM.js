//! https://youtu.be/EgDmCbhmstU     : Learn What Matters
// var : ES5, Function Scoped - can work anywhere within the function, Adds itself to window object
// var : Hoisting
function abc(){
    for(var i =0;i<11;i++){
        console.log(i);
    }
    console.log(i+""+" <-This is outside braces scope");
}
abc();


// let const : ES6, Braces Scoped - can work only within the braces, Doesn't add itself to window object
function abc() {
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
  //console.log(i);       //! throws error
}
 

//! Window Object : box of features given by browser which is used by js like "prompt" "alert"

//! Execution Context of a Function -> 
//* It is created when a function is called, It contains 3 things
//* 1.Variables , 2. function inside fun , 3. Lexical Environment(contains scope and scope chain)

//! Copy Reference values
var a = [1,2,3,4,5];
var b = [...a]          // copy the value not the reference [(...)spread]
b.pop();
console.log(b);
console.log(a);

//! Everything in js is either TRUTHY or FALSY
//? Falsy : 0, null, false, NaN, Undefined, document.all 
//? Truthy : rest all

if("Shivam"){
    console.log("Truthy");
}else{
    console.log("Falsy");
}

//! FOR EACH : Works on Array only & it doesn't change array
let a1 = a.forEach((val) => {
    val = val+2;
    console.log(val);
});

console.log(a);
console.log(a1);

//! FOR IN : for iterating in an object
var obj ={
    name : "Shivam",
    age : 22,
    city : "Chennai"
};

for(var key in obj){
    console.log(key,obj[key]);
}


//! First Class Functions
var fun = function(){
      
}

//! Behind the scenes ARRAYS 😱
// It is actually an object as explained below
// var arr = [13,2,2,11,2];

var arr = {
    0 : 13,
    1 : 2,
    2 : 2,
    3 : 11,
    4 : 2
};

console.log(arr);
console.log(typeof arr);

//! Callback Function : waits to execute 
setTimeout(function(){
    console.log("2 second baad chalega");
},2000);
