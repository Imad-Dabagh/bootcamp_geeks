// Exercise 5: Generic Constraints
function logLength<T extends { length: number }>(item: T): void {
    console.log("Length:", item.length);
  }
  
  logLength("imad");
  logLength([1, 2, 3, 4]);          
  logLength({ length: 10 });