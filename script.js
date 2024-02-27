let button = document.getElementById("button");
let grid = document.getElementById("grid");

button.addEventListener("click", ()=>{
  resetSize();
});

function resetSize(){
  let size = prompt("how many squares per side? (1-100");
  if (size > 100){
    alert("input a number between 1-100");
  }
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  makeGrid(size);
};

function makeGrid(size){
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.innerHTML = " ";

  for (let i = 0; i < size * size; i++){
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    grid.appendChild(div);

    div.addEventListener("mouseover", e=>{
      div.style.backgroundColor = "blue";
    
    });

    function clearGrid(){
      button.addEventListener("click", e=>{
        div.style.backgroundColor = "white";
      });
    }
    clearGrid();
  };
};

makeGrid(16);

