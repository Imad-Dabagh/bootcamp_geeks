type User = {
    type: 'user';
    name: string;
    age: number;
   };
   
type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

function handleData(array:(User | Product | Order)[]):string[] {
    let result:string[] = []

    for(const item of array){
        if (item.type === 'user'){
            result.push(`Hello ${item.name}, your age is ${item.age}`);
        } else if (item.type === "product") {
            result.push(`Product ID: ${item.id}, Price: $${item.price}`);
        } else if (item.type === "order") {
            result.push(`Order ID: ${item.orderId}, Amount: $${item.amount}`);
        } else {
            result.push("Unknown item type.");
        }
    }
    return result;
}

