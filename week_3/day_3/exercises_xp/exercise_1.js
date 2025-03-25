// Exercise 1 : Find the numbers divisible by 23
// Did the Bonus question direclty => Add a parameter divisor to the function.

const displayNumbersDivisible = (divisor) => {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % divisor == 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log(`The total is: ${sum}`);
}

displayNumbersDivisible(23)



