// Exercise 5 : Family

// 1. Create an object called family with a few key value pairs.
const family = {
    Father: "Ahmad",
    Mother: "Fatima",
    Son: "Amine",
    Daughter: "Salma"
};

// 2. Using a for in loop, console.log the keys of the object.
for (key in family){
    console.log(key);
}

// 3. Using a for in loop, console.log the values of the object.
for (key in family) {
  console.log(family[key]);
}
