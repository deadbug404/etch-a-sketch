function makeGrid(){
    let size = document.querySelector("#size");
    let sizeValue = size.value;
    if (sizeValue === "" || sizeValue === 0) sizeValue = 16;
    grid.innerHTML = "";
    for(let i = 1;i<=sizeValue;i++){
        let rowDiv = document.createElement("div");
        rowDiv.id = `row${i}`;
        rowDiv.classList.add("row");
        for(let j=1;j<=sizeValue;j++){
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("square");
            rowDiv.appendChild(columnDiv);
        }
        grid.appendChild(rowDiv);
    }
    sizeValue = "";
}


function draw(e){
    if(e.target.id === "grid"){
        return;
    }
    if(e.type === "mouseover" && !mouseDown) return;

    if(rainbow){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }else{
        e.target.style.backgroundColor = color;
    }

}

function changeColor(){
    color = colorPicker.value;
}

function erase(e){
    if(e.target.checked){
        color = "#FFFFFF";
        rainbowPicker.checked = false;
        rainbowPicker.disabled = true;
        rainbow = false;
        colorPicker.disabled = true;
    }else{
        color = colorPicker.value;
        colorPicker.disabled = false;
        rainbowPicker.disabled = false;
    }
}

function rainbowFunc(e){
    if(e.target.checked){
        rainbow = true;
    }else{
        rainbow = false;
    }
}

function reset(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "white");
}

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const grid = document.querySelector("#grid");
const submitButton = document.querySelector("#submitButton");
const colorPicker = document.querySelector("#color-picker");
const eraser = document.querySelector("#eraser");
const rainbowPicker = document.querySelector("#rainbow");
const resetButton = document.querySelector("#reset-button");

let rainbow = false;
let mouseDown = false;
let color = colorPicker.value;

grid.addEventListener("mouseover",draw);
grid.addEventListener("mousedown",draw);
submitButton.addEventListener("click", makeGrid);
colorPicker.addEventListener("input", changeColor);
eraser.addEventListener("change", erase);
rainbowPicker.addEventListener("change", rainbowFunc);
resetButton.addEventListener("click",reset);

makeGrid();