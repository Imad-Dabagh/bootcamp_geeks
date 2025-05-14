// Exercise 6: Object Type Annotations
type Person = {
    name: string,
    age: number
}

const createPerson = (name: string, age:number):Person => {
    return {name: name, age: age}
}

console.log(createPerson("amine", 23))