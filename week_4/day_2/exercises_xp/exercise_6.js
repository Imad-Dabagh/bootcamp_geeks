// Exercise 6 : Employees #2
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// 1. Using the filter() method, create a new array, containing the students that passed the course.
let passed = students.filter(student => student['isPassed'])
console.log(passed);

// 2. Bonus : Chain the filter() and forEach() methods, to congratulate the students
// “Good job Jenner, you passed the course in Information Technology”...
let passed2 = students.filter((student) => student["isPassed"]);

passed2.forEach((student) => console.log(`Good job ${student['name']}, you passed the course in ${student['course']}`));