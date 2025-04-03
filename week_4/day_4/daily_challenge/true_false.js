
// Create a function that returns true if all parameters are truthy, and false otherwise.

const allTruthy = (...params) => {
    return params.every(param => param)
}

console.log(allTruthy(1,1,1,0))
console.log(allTruthy(true, true, null, 1));
console.log(allTruthy(5, 4, 3, 2, 1));