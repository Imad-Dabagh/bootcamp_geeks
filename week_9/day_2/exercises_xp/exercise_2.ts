// Exercise 2: Readonly Properties in a Class
class Product {
  readonly id:number
  public name:string
  public price:number

  constructor(id:number, name:string, price:number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }

  getProductInfo():string{
    return `Product name: ${this.name}, Price: ${this.price}`;
  }
}

const product1 = new Product(1, 'Phone', 234);
console.log(product1.getProductInfo())

// product1.id = 2 >> Error: Cannot assign to 'id' because it is a read-only property.