// Exercise 1: Create a TypeScript program that logs the message “Hello, World!” to the console.
function sayHello():string {
    return "Hello World";
}

console.log(sayHello());

// Exercise 2: Define a variable age of type number and a variable name of type string, and log them to the console.
let age:number = 23;
let namee:string = "Ahmad";
console.log(`My name is ${namee}, i'm ${age} years old`)

// Exercise 3: Use union types to declare a variable id that can be either a string or a number.
let id:(number | string);
id = 12;
id = "Hello";

// Exercise 4: Write a function that takes a number as input and returns a string indicating whether the number is positive, negative, or zero.

function verifyNumber(number: number): void{
    if (number > 0){
        console.log(`This number ${number} is positive`);
    } else if (number < 0){
        console.log(`This number ${number} is negative`);
    } else {
        console.log(`This number ${number} is zero`);
    }
}

// Exercise 5: Create a function getDetails that takes a name and age as input and returns a tuple containing the input values and a greeting message.
function getDetails(namee: string, age:number):any{
    let details:(string | number)[] = []
    let sentence:string = `Hello, ${namee}! You are ${age} years old.`
    details.push(namee);
    details.push(age);
    details.push(sentence);

    return details;
}
const details = getDetails("Alice", 25);
console.log(details);

