// Exercise 3 : Is it a string
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. 
// The function should return true or false

const isString = (value) => {
  return typeof value === "string" ? true : false;
}


// Exercise 4 : Find the sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const calcSum = (a , b) => a + b
console.log(sum(2, 4)); // => 6