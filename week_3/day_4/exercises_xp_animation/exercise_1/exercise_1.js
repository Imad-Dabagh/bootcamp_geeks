// Part I
setTimeout(()=>{
  alert("Hello World");
},2000)

// Part II

let container = document.getElementById("container");

let helloWorld1 = setTimeout(() => {
  let parag = document.createElement("p");
  parag.innerText = "Hello World";
  container.appendChild(parag);
}, 2000);

// Part III

// Clear interval after 5 parags
let i = 1;
let helloWorld2 = setInterval(() => {
  let parag = document.createElement("p");
  parag.innerText = `Hello World #${i}`;
  container.appendChild(parag);
  i++;
  if(i == 6){
    clearInterval(helloWorld2)
  }
},2000)

// Clear interval using button
let clear = document.getElementById("clear");
clear.addEventListener('click', function(){
  clearInterval(helloWorld2);
})