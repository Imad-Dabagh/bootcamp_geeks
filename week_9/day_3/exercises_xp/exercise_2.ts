// Exercise 2: Type Guards with Union Types

type alphanumeric = string | number;

function describeValue(value: alphanumeric): string {
  if (typeof value === "number") {
    return `This is a number`;
  } else if (typeof value === "string") {
    return `This is a string`;
  } else {
    return `Invalid type`
  }
}
