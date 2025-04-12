// Task 2: Using an NPM Module

import chalk from "chalk";

export default function colorGreeting(name, age){
    let coloredName = chalk.red(name)
    let coloredAge = chalk.green.bgCyan(age);
    console.log(`Hello ${coloredName}, your age is ${coloredAge}`)
}