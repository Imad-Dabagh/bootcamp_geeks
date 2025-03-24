// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();

let secretSociety = ''

for (i=0 ; i < names.length ; i++){
    secretSociety += names[i][0]
}

console.log(secretSociety);
