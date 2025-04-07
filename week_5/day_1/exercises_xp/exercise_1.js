// Exercise 1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
// === The function should return a Promise:
// ======= the promise resolves if the argument is less than or equal to 10
// ======= the promise rejects if argument is greater than 10.


const compareToTen = (num) => {
    return promise = new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    })
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))