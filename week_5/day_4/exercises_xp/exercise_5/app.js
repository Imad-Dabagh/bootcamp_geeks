const lodash = require('lodash');
const {add, multiple} = require('./math.js');

// using the imported functions
console.log(add(32, 17, 9, 23, 5, 7));
console.log(multiple(2, 5, 3, 1));

// using lodash functions
let numbers = [32, 17, 9 , 23 , 5, 7];

let sum = lodash.sum(numbers);
console.log(sum);

let min = lodash.min(numbers);
console.log(`The smaller number is: ${min}`);