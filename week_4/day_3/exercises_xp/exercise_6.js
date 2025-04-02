// Exercise 6 : Challenges
// ====== 1. Evaluate these (ie True or False)

// [2] === [2] => false
// {} === {} => false

// Both false because JS compares objects by reference not value


// ====== 2. What is, for each object below, the value of the property number and why?
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
// console.log(object2.number); // number = 4 because object2 is a reference of obj1 which was changed from 5 to 4
// console.log(object3.number); // number = 4 because object3 is also a reference of obj1, changed from 5 to 4
// console.log(object4.number); // number = 5 beacsue object4 is has its own issigned value and not a reference of obj1


// ======= Part 3 | Class Animals

// 1. Create a class Animal with the attributes name, type and color.
class Animal{
    constructor(name, type, color){
        this.name = name
        this.type = type;
        this.color = color;
    }
}

// 2. Create a class Mammal that extends from the Animal class. Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, and returns the details of the animal
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(sound) {
    return `${sound}! I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }

}

// 3. Create a farmerCow object that is an instance of the class Mammal. 
// The object accepts a name, a type and a color and calls the sound method.

farmerCat = new Mammal('Lani', 'cat', 'gray')
console.log(farmerCat.sound("Meow"));