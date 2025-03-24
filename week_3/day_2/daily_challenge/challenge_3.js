// Daily challenge GOLD: Bubble Sort

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using the .toString() method convert the array to a string.
console.log(numbers.toString());

// 2. Using the .join()method convert the array to a string. Try passing different values into the join.
console.log(numbers.join(" - "));
console.log(numbers.join(" | "));
console.log(numbers.join(" = "));

// 3. Bonus : Sort the numbers array in descending order, do so using nested for loops
let numbersSorted = [];


for (let j = 0 ; numbers.length > 0 ; j++) {
  let max = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  numbersSorted.push(max);
  numbers.splice(numbers.indexOf(max), 1);
}

console.log(numbersSorted);