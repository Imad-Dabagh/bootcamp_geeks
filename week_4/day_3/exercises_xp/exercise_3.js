// Exercise 3: User & id
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1. Using methods taught in class, turn the users object into an array:
const usersArray = Object.entries(users);
console.log(usersArray);

// 2. Modify the outcome of part 1, by multipling the user’s ID by 2.
usersArray.forEach(user => {
    user[1] *= 2
})

console.log(usersArray);