const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1. Create an array using forEach that contains all the usernames from the gameInfo array, 
// add an exclamation point (ie. “!”) to the end of every username.
let usernames = [];
gameInfo.forEach((user) => {
  usernames.push(`${user["username"]}!`);
});
console.log(usernames);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
let winners = [];
gameInfo.forEach((user) => {
    if(user['score'] > 5){
        winners.push(user['username'])
    }
});
console.log(winners);

// 3. Find and display the total score of the users.
let totalScore = gameInfo.reduce((total, user) => {
    return total += user["score"]
}, 0)

console.log(totalScore);