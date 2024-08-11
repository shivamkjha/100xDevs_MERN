// this is comment :)

// VARIABLES
let name = 'Shivam';
console.log(name);

// const can't reassigned
const interestRate = 0.3;
console.log(interestRate);

// var : can be used before assigning
// Hoisting : declaration (var surname;) goes to top of the scope
console.log(surname);       //returns undefined
var surname = "Jha";

// PRIMITIVES
let name1 = "shubham";      // string literal
let age = 30;               // number Literal || there is no float
let isApproved = true;      // boolean Literal
let firstName = undefined;  // by default if not initialized a variable is undefined
let lastName = null;        // object

console.log(typeof name1);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof lastName);

// ternary operator
let x;
let y = x == "Shivam" ? 1 : 2;
console.log(y);
console.log("The sum is " + sum(5,5));

// JS IS A DYNAMICALLY TYPED LANGUAGE : Variable of one datatype can be reassigned the value of another datatype
let student1 = "Satyam";
console.log(typeof student1);

student1 = 21;                  // datatype changed 
console.log(typeof student1);

//! REFERENCE TYPES : Object, Array, Functions

//! OBJECTS : Like real world entity having some attributes or properties.
let person = {
    name : "Shiv",
    age : 21,
};

console.log(person);

// Dot Notation
person.name = "Shivam";
console.log(person);

// Bracket Notation
person['name'] = "Shivam Jha";
console.log(person);

// Create property of the object
person.gender = "male";
console.log(person)

// Delete prop
delete person.gender;
console.log(person)


//! ARRAYS : Collection, can store different datatype, has no fixed length
// push, pop, unshift, shift , splice(index,lengthToDelete from index)
let selectedColors = ['red','blue','green'];
console.log(selectedColors);
selectedColors.push('lastColor');
console.log(selectedColors);
selectedColors.pop();
console.log(selectedColors);
selectedColors.unshift('firstColor')    // put element at first index
console.log(selectedColors);
selectedColors.shift();                 // remove element at the first index
console.log(selectedColors);

// indexing
console.log(selectedColors[0]);
selectedColors[2] = 2;
console.log(selectedColors);
console.log("Length of this array is "+ selectedColors.length);

//! FUNCTIONS
function greet() {
    console.log("I'm a function");
}

greet();

function greetName(name){               // Here name is parameter
    console.log("Hello, " + name);
}


greetName(person.name);                 // here name is argument
greetName(name);

function sum(num1 ,num2) {
    return num1+num2;
}

// Arrow Functions
let multiply = (num1,num2) => {
    return num1 * num2;
};

console.log(multiply(5,8));




//? Closure : Function within Function : it kinda behaves like class n object where for each object the properties of the class(count here) has different state
const counter = () => {
    let count = 0;
    return () => {
        return count++;
    }
}

// this will not work as "function counter" returns a function
console.log(counter());

// We can assign the result to a variable and then call it as a function
const counter1 = counter();
const counter2 = counter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());







