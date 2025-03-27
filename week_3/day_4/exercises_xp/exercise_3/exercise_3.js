// 1. Declare a global variable named allBoldItems.
let allBoldItems;

// 2. Create a function called getBoldItems() that takes no parameter. 
const getBoldItems = () => {
    allBoldItems = document.querySelectorAll('strong')
}

// 3. Create a function called highlight() that changes the color of all the bold text to blue.
const highlight = () => {
    for (let i=0 ; i < allBoldItems.length ; i++){
        allBoldItems[i].style.color = 'blue'
    }
}

// 4. Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
const returnItemsToDefault = () => {
  for (let i = 0; i < allBoldItems.length; i++) {
    allBoldItems[i].style.color = "black";
  }
};

// 5. Call the function highlight() on mouseover, and the function returnItemsToDefault() on mouseout
getBoldItems();

allBoldItems.forEach(element => {
  element.addEventListener("mouseover", highlight);
  element.addEventListener("mouseout", returnItemsToDefault);
});
