const products = require("./products.js")

console.log(products.length);

const findProduct = (name) => {
    let details = ''
    for (let i=0 ; i < products.length ; i++){
        if (products[i].name.toLowerCase() === name.toLowerCase()) {
            details = `The name of the prod is: ${products[i].name}, The price: ${products[i].price}, The category: ${products[i].category}`;
        } 
    }
    details ? console.log(details) : console.log('Product Not Found!')
}

findProduct("SumsUNG");
findProduct("HP");
findProduct("smart tv");
findProduct("Dell");