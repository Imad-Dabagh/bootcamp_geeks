// Exercise 4 : Employees
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message.

let welcomeStudents = users.map((user) => {
  return `Hello ${user["firstName"]}`;
});

// console.log(welcomeStudents)

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
let newArray = users.filter(user => {
    return user["role"] === "Full Stack Resident";
})

// console.log(newArray);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.
let bonusArray = users.filter((user) => {
  return user["role"] === "Full Stack Resident";
});

bonusArray = bonusArray.map(user => {
    return `Hello ${user['lastName']}`
})

console.log(bonusArray);