// Exercise 3 : Repeat the question

do {
    number = prompt("Give a number: ");
    // console.log(typeof number); => String
    number = Number(number); 
} while (isNaN(number) || number < 10);

// Number() convert anything to number even string so we should first check if number is NaN