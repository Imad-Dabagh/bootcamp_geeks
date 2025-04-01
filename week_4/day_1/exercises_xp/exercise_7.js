let navBar = document.getElementById("navBar");


(function(name){
    let nameDiv = document.createElement('div')
    nameDiv.textContent = name

    let imgDiv = document.createElement("img");
    imgDiv.setAttribute("alt", "userImg");
    
    navBar.appendChild(nameDiv)
    navBar.appendChild(imgDiv)

})('Imad')