// Exercise 6 : Rudolf

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let sentence = '';

for (key in details) {
  sentence += key + ' ' + details[key] + ' ';
}

console.log(sentence)