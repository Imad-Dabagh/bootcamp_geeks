// Exercise 3: Type Casting

function getFirstElement(list: (number | string)[]):string{
    let firstElement = list[0].toString();
    return firstElement;
}

let list = [23, "amine", "saad", 78, "book", 90]

console.log(getFirstElement(list))