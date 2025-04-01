// // #1

// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }

// // ==> The output is 3 because we reassigned 'a' in the If condition

// // #1.2 What will happen if the variable is declared with const instead of let ?
// // ==> We will get an error because const variables can't be reassigned

// // ===================================================================

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // => a = 0
// funcTwo() // => chnage a to 5
// funcThree() // => a = 5
// // #2.2 What will happen if the variable is declared with const instead of let ?
// // ==> We will get an error in funcTwo() because const variables can't be reassigned

// // ==============================================================
// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// // => inside the funcFive function hello
// // because window creates a global variable, 'a' now belongs to the global scope and can be accessible from anywhere in the code

// // ==============================================================

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix() // => inside the funcSix function test
// // #4.2 What will happen if the variable is declared with const instead of let ?
// // => Nothing happen because the local 'a' inside funcSix() is separate from the global 'a = 1', and it is not reassigned

// // ==============================================================


//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let ?

// => Nothing happen because 'a' inside the if block is separate from the global 'a', both are block-scoped