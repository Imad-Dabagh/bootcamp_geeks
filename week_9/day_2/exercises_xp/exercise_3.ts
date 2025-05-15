// Exercise 3: Class Inheritance

class Animal {
  
  public name:string

  constructor(name:string) {
      this.name = name;
    }

  makeSound():string{
    return `Sound`
  }
}

class Dog extends Animal{

  sound:string

  constructor(name:string, sound:string){
    super(name);
    this.sound = sound
  }

  makeSound():string{
    return `${this.name} can ${this.sound}`
  }
}

let dog1 = new Dog("rex", "bark")

console.log(dog1.makeSound())