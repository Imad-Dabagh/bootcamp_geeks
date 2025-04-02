// Exercise 5 : Star Wars
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// 1. Use the reduce() method to combine all of these into a single string.
let sentence = epic.reduce((acc, value) => acc += value + " ", "=> ")
console.log(sentence);

// 2. Bonus by me :) Using join()

let joined = epic.join(" ")
console.log(joined)