const button = document.getElementById("button");

function getInput(){
let size = prompt("how many squares per side?");
makeGrid(size);
};

button.addEventListener("click", getInput());

function makeGrid(size){
let grid = document.getElementById("grid");

for (let i = 0; i < size * size; i++){
  const div = document.createElement("div");
  div.classList.add("grid-item");
  
  div.addEventListener("mouseover", addDrawing);
  grid.appendChild(div);

};
};



function addDrawing(e){
  e.target.style = "background: blue"
  e.target.removeEventListener("mouseover", addDrawing);
}