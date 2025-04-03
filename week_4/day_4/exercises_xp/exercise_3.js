const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

// 1.1 Convert this JS object into a JSON object.
let newJson = JSON.stringify(marioGame);
console.log(newJson);

// 1.2 What happens to the nested objects ?
// The nested objects remain nested as they were in the original JavaScript object when it's converted to JSON. 
// The structure stays the same, but they are now represented as string data in JSON format.

// 2. Convert and pretty print this JS object into a JSON object.
let prettyJson = JSON.stringify(marioGame, null, 2);
console.log(prettyJson);