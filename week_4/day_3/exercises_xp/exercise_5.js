// Exercise 5 : Dog class

// Using the Dog class below:
class Dog {
  constructor(name) {
    this.name = name;
  }
};

// The constructor that will successfully extend the Dog class is:
// 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};