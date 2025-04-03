const cleanStringFunction = (value) => {
    let result = value.split(" ").join("").split("").sort().toString().toLowerCase();
    return result
}

console.log(cleanStringFunction("imad hoo") === cleanStringFunction("oop imad"));
