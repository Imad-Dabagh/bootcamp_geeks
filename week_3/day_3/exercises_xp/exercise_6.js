// 2. Change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

// 3. We are going to add a new <li> to the <ul>
// 3.1 First, create a new <li> tag (use the createElement method).
let newLi = document.createElement("li"); 

// 3.2 Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode("Logout");

// 3.3 Append the text node to the newly created list node (<li>).
newLi.appendChild(newTextNode);

// 3.4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ulList = document.getElementsByTagName('ul')[0];
ulList.appendChild(newLi);

// 3.5 Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from (<ul>).
// Display the text of each link. (Hint: use the textContent property).
console.log(ulList.firstElementChild.textContent);
console.log(ulList.lastElementChild.textContent);