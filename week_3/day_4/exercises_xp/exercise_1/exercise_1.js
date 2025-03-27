// 1. Using a DOM property, retrieve the h1 and console.log it
let h1 = document.getElementsByTagName('h1')[0];
console.log(h1);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.
let parag = document.getElementsByTagName('p');
let lastParag = parag[parag.length - 1];
lastParag.remove;

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.getElementsByTagName("h2")[0];
const changeColor = () => {
    h2.style.color = 'red';
}

h2.addEventListener('click', changeColor);

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.getElementsByTagName("h3")[0];
const hideH3 = () => {
  h3.style.display = 'none'
};

h3.addEventListener("click", hideH3);

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
function makeBold(){
    let parags = document.getElementsByTagName("p");
    
    for (let i=0 ; i < parags.length ; i++){
        parag[i].style.fontWeight = "bold";
    }

}

// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.
function resize(){
    randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + 'px'
}
h1.addEventListener('mouseover', resize)

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out
function fadeOut(){
  h2.style.transition = "opacity 0.8s";
  h2.style.opacity = "0";
}
h2.addEventListener("mouseover", fadeOut);

