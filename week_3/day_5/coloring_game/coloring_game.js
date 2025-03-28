let drawingArea = document.getElementById("drawingArea");
let boxColor = 'red';
let mouseDown = false;

for (let i = 0 ; i < 1300 ; i++){
    let drawingBox = document.createElement("div");
    drawingBox.setAttribute("class", "drawingBox");
    drawingArea.appendChild(drawingBox);
}

const changeColor = (newColor) => {
  boxColor = newColor;
};

drawingArea.addEventListener("mousedown" , function (){
    mouseDown = true;
})

drawingArea.addEventListener("mouseup", function () {
    mouseDown = false;
});

drawingBoxes = document.querySelectorAll(".drawingBox");

drawingBoxes.forEach((box) => {
    box.addEventListener("mouseover", function (event) {
      if(mouseDown){
        event.target.style.background = boxColor;
      }
    });
});

let clearBtn = document.getElementById("clearBtn");

const clearAll = () => {
    drawingBoxes.forEach((box) => {
        box.style.background = 'white'
    })
}

clearBtn.addEventListener("click", clearAll);