function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

// callback function : coz its calling another function
function add(fn, a, b) {
  console.log(fn);
  return fn(a) + fn(b);
}

// calling the function
console.log(add(cube, 1, 2));

// using anonymous function
setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

// another example of callback
function fetchData(url, callback) {
  // Simulate an asynchronous data fetch
  setTimeout(() => {
    const data = '{ "message": "Hello from the server" }';
    callback(data);
  }, 0);
}

// passing the entire function as argument
let arr1 = 1234;
arr1.split('');
console.log(arr1);