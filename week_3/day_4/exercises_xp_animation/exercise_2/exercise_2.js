let position = 0;

function myMove() {
  let myBox = document.getElementById("animate");

  let i = 0;

  let moveBox = setInterval(() => {
    myBox.style.left = position + i + "px";
    i++;

    if (i == 350){
      clearInterval(moveBox);
    }

  }, 10);
}
