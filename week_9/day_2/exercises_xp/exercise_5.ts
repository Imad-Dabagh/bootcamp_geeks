// Exercise 5: Extending Interfaces with Optional and Readonly Properties

interface User {
  readonly id:number;
  name:string;
  email:string;
}

interface PremiumUser extends User{
  membershipLevel?:number
}

function printUserDetails(userObj:PremiumUser):string{
  return `Id: ${userObj.id}, Name: ${userObj.name}, Email: ${userObj.email}, Membership Level: ${userObj.membershipLevel}`;
}

let user1: PremiumUser = {
  id: 2,
  name: "Ahmad",
  email: "ahmad@gmail.com",
  membershipLevel: 15
}

console.log(printUserDetails(user1))