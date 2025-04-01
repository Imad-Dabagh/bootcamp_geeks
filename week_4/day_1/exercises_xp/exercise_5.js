// Exercise 5 : Kg and grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
function kiloDeclar(weight) {
    let grams = weight * 1000;
    return grams;
}

console.log(kiloDeclar(5));

// 2. Then, use function expression and invoke it.
let kiloExpre = function(weight) {
  let grams = weight * 1000;
  return grams;
}

console.log(kiloExpre(3));

// 3. Function Declaration is hoisted to the top of the scope so it can be called before declaration 
// but Function Expression is not hoisted and must be declared before calling it
const kiloArrow = (weight) => weight * 1000

console.log(kiloArrow(3));