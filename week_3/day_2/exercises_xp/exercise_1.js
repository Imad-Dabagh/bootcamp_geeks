// Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

// =========== Part I - Review about arrays =============

// 1. Write code to remove “Greg” from the people array
people.splice(0,1)

// 2. Write code to replace “James” to “Jason” - By me not GPT
people[people.indexOf("James")] = "Jason";

// 3. Write code to add your name to the end of the people array
people.push("Imad");

// 4. Write code that console.logs Mary’s index.
console.log(people.indexOf("Mary"))

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
let peopleNew = people.slice(1,3);
console.log(peopleNew);

// 6. Write code that gives the index of “Foo”. Why does it return -1?
console.log(people.indexOf("Foo"));
// indexOf method returns -1 if the didn't find the element

// 7.Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last);


// ========== Part II - Loops ==============

// 1. Using a loop, iterate through the people array and console.log each person.
console.log("\nFirst loop:"); // just to test the loops

for (i = 0 ; i < people.length ; i++){
    console.log(people[i]);
}


// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon”
console.log("\nSecond loop:"); // just to test the loops

for (i = 0 ; i < people.length ; i++){
    
    console.log(people[i]);

    if (people[i] === "Devon"){
        break;
    }
}