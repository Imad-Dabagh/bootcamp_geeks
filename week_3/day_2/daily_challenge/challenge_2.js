// Daily challenge: Stars

// Using one loop
let star = "* ";
let stars = "";

for (let i = 0 ; i < 6 ; i++){
    stars += star;
    console.log(stars);
}

// Using two nested for loops

for (let i = 0; i <6 ; i++) {

  let stars_2 = "";

  for (let j = 0 ; j <= i ; j++){
    stars_2 += star
  }
  console.log(stars_2);

}