// Exercise 4: Static Properties and Methods

class Calculator {
    static add(a: number, b: number): number{
      return a + b;
    }
    static subtract(a: number, b: number): number{
      return a - b;
    }
}

let result = Calculator.add(2,6);
console.log(result);
let result2 = Calculator.subtract(6,6);
console.log(result2);