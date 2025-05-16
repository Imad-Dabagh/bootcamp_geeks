// Exercise 7: Type Assertions and Generic Constraints

function formatInput<T extends { toString(): string }>(input: T): string {
  let str = input.toString() as string;
  
  return `*** ${str} ***`;
}

console.log(formatInput(2025));        

