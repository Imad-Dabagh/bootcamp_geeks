// Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success")
    }, 4000)
}).then((result) => {
    console.log(result)
})