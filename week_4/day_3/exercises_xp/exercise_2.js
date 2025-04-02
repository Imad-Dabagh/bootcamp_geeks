// Exercise 2: Display Student Info

function displayStudentInfo(objUser) {
  let { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });