import { persons } from "./data.js";

const avgAge = () => {
    let ages = 0;
    for (let i=0 ; i<persons.length ; i++){
        ages += persons[i].age;
    }
    return Math.floor(ages / persons.length);
}

console.log(`The average age is: ` + avgAge());