// Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” ...
let choice = 1; 
colors.forEach(color => {
    console.log(`${choice}# choice is ${color}`);
    choice++;
})

// 2. Check if at least one element of the array is equal to “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")

let checkColor = colors.some(color => color === "Violet")
checkColor ? console.log("Yeah") : console.log("No...");