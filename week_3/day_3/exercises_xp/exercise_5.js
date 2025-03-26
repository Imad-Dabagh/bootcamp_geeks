// 2.1 Retrieve the div and console.log it
let div = document.getElementById("container");
console.log(div);

// 2.2 Change the name “Pete” to “Richard”
let lists = document.getElementsByTagName("li")[1];
lists.innerHTML = "Richard";

// 2.3 Delete the second <li> of the second <ul>.
let listsUl = document.getElementsByClassName("list")[1];
let li = listsUl.getElementsByTagName("li")[1];
listsUl.removeChild(li);

// 2.4 Change the name of the first <li> of each <ul> to your name. (Hint: use a loop)
let ulLists = document.getElementsByTagName("ul");

for (let i = 0; i < 2; i++) {
  ulLists[i].getElementsByTagName("li")[0].innerHTML = "Imad";
}

// 3.1 Add a class called student_list to both of the <ul>'s.
for (let i = 0; i < 2; i++) {
  ulLists[i].classList.add("student_list");
}

// 3.2 Add the classes university and attendance to the first <ul>.
ulLists[0].classList.add("university", "attendance");

// 4.1 Add a “light blue” background color and some padding to the <div>.
let theDiv = document.getElementById("container");
theDiv.style.background = "lightblue";
theDiv.style.padding = "10px";

// 4.2 Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
let liDan = ulLists[1].getElementsByTagName("li")[1];
liDan.style.display = "none";

// 4.3 Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
let liRichard = ulLists[0].getElementsByTagName("li")[1];
liRichard.style.border = "1px solid black";

// 4.4 Change the font size of the whole body.
document.body.style.fontSize = "30px";
