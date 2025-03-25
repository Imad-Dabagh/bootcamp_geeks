// Exercise 4 : Vacations Costs


// 1. Define a function called hotelCost()...
const hotelCost = () => {
    let numberNights;
    do {
      numberNights = Number(prompt("Give the number of nights you want to stay: "));
      
    } while (isNaN(numberNights) || numberNights <= 0);

    return numberNights * 140;
}
// console.log(hotelCost());

// 2. Define a function called planeRideCost()...
const planeRideCost = () => {
  let destination;
  let price;
  while (true) {
    destination = prompt("Enter your destination:");
    if (destination && isNaN(destination)) {
      break;
    }
  }

  if (destination.toLowerCase() === "london") {
    price = 183;
  } else if (destination.toLowerCase() === "paris") {
    price = 220;
  } else {
    price = 300;
  }

  return price;

};

// console.log(planeRideCost());

// 3. Define a function called rentalCarCost()
const rentalCarCost = () => {
  let numberDays;
  let cost;
  do {
    numberDays = Number(prompt("Give the number of days you want to rent the car: "));
  } while (isNaN(numberDays) || numberDays <= 0);

  if (numberDays > 10){
    cost = (40 * numberDays) - (40 * numberDays * 0.05);
  } else {
    cost = 40 * numberDays;
  }

  return cost
};

// 4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.

const totalVacationCost = () => {
  console.log(
    `The car cost: ${rentalCarCost()}, the hotel cost: ${hotelCost()}, the plane tickets cost: ${planeRideCost()}`
  );
}

// 5. Call the function totalVacationCost()

totalVacationCost();