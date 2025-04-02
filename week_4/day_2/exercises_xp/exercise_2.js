// Exercise 2 : Colors #2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue ...
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

let choice = 1;
colors.forEach((color) => {
    choice === 1
      ? console.log(`${choice}st choice is ${color}`)
      : choice === 2
      ? console.log(`${choice}nd choice is ${color}`)
      : choice === 3
      ? console.log(`${choice}rd choice is ${color}`)
      : console.log(`${choice}th choice is ${color}`);
    choice++;
});