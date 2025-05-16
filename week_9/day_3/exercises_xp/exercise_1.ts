// Exercise 1: Intersection Types

interface Person {
  name: string;
  age: number;
}

interface Address {
  street: string;
  city: string;
}

type PersonWithAddress = Person & Address

let person: PersonWithAddress = {
  name: "Imad",
  age: 55,
  street: "Hay Moulay Rchid",
  city: "Casablanca",
};