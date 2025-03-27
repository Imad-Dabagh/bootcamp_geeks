// 1. Retrieve the form and console.log it.
let myForm = document.getElementsByTagName('form')[0]
console.log(myForm)

// 2. Retrieve the inputs by their id and console.log them.
let fname = document.getElementById("fname");
console.log(fname);

let lname = document.getElementById("lname");
console.log(lname);

// 3. Retrieve the inputs by their name attribute and console.log them.
let firstname = document.getElementsByName("firstname")[0];
console.log(firstname);

let lastname = document.getElementsByName("lastname")[0];
console.log(lastname);

// 4. When the user submits the form (ie. submit event listener)
// 4.1 use event.preventDefault() to prevent the form from refreshing the page

function formSubmitted(e) {
  e.preventDefault();

  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;

  console.log(firstName);
  console.log(lastName);

  let ulList = document.getElementsByClassName("usersAnswer")[0];

  let li1 = document.createElement('li');
  let li2 = document.createElement("li");

  li1.textContent = firstName;
  li2.textContent = lastName;

  ulList.appendChild(li1);
  ulList.appendChild(li2);
  
}
myForm.addEventListener('submit' , formSubmitted)