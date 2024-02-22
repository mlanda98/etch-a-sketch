function makeGrid(size){
let grid = document.getElementById("grid");

for (let i = 0; i < size * size; i++){
  const div = document.createElement("div");
  div.classList.add("grid-item");
  
  div.addEventListener("mouseover", addDrawing);
  grid.appendChild(div);

};
};

makeGrid(16);

function addDrawing(e){
  e.target.style = "background: blue"
  e.target.removeEventListener("mouseover", addDrawing);
}