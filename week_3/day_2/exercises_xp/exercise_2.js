// Exercise 2 : Your favorite colors

// 1. Create an array called colors where the value is a list of your five favorite colors.
const colors = ["Black" , "Red" , "White" , "Blue" , "Green"];

// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”...
for (let i = 0 ; i < colors.length ; i++){
    let j = i + 1;
    console.log(`My #${j} choice is ${colors[i]}`)
}

// 3. Change it to console.log “My 1st choice”, “My 2nd choice”... picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const suffixes = ["st" , "nd" , "rd" , "th"]

for (let i = 0 ; i < colors.length ; i++){
    let j = i + 1;
    if (j <= 3){
        console.log(`My ${j}${suffixes[j-1]} choice is ${colors[i]}`)
    } else{
        console.log(`My ${j}th choice is ${colors[i]}`)
    }
}