// Exercise 3 : What’s in my wallet ?

const changeEnough = (itemPrice, amountOfChange) =>{
    let myTotal =
      amountOfChange[0] * 0.25 +
      amountOfChange[1] * 0.1 +
      amountOfChange[2] * 0.05 +
      amountOfChange[3] * 0.01;

    if(myTotal >= itemPrice){
      return true;
    } else {
      return false;
    }
}

console.log(changeEnough(10.25, [25, 20, 5, 0]))