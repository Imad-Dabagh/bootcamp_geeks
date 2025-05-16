// Exercise 6: Intersection Types and Type Guards

type Person = {
  name: string;
  age: number;
};

type Job = {
  position: string;
  department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {
  if (emp.position === "Manager") {
    return `${emp.name} is a Manager in the ${emp.department} department.`;
  } else if (emp.position === "Developer") {
    return `${emp.name} is a Developer in the ${emp.department} department.`;
  } else {
    return `${emp.name} works in the ${emp.department} department.`;
  }
}

const employee1: Employee = {
  name: "Ali",
  age: 35,
  position: "Manager",
  department: "Sales"
};

console.log(describeEmployee(employee1));


