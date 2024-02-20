function makeGrid(size){
let grid = document.getElementById("grid");

for (let i = 0; i < size * size; i++){
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.textContent = i;
  grid.appendChild(div);
  

};


};

makeGrid(16);
