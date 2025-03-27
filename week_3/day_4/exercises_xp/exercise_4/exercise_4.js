let myForm = document.getElementsByTagName("form")[0];

let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

console.log(radius);
console.log(volume);

function formSubmitted(e) {
  e.preventDefault();
  r = parseFloat(radius.value);
  volume.value = ((4 / 3) * Math.PI * Math.pow(r, 3)).toFixed(2);
  volume.textContent = (4 / 3) * Math.PI * Math.pow(radius.value, 3);
}

myForm.addEventListener("submit", formSubmitted);