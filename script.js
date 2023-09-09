const mainGrid = document.querySelector(".main-grid");
const gridSizeBtn = document.querySelector(".gs-btn");

let gridSquares;
let gridSize;
let overallSquares;

function initializeGrid() {
  for (let i = 0; i < overallSquares; i++) {
    gridSquares = document.createElement("div");
    gridSquares.className = "grid-squares";
    mainGrid.appendChild(gridSquares);
    gridSquares.style.width = `${960 / gridSize}px`;
    gridSquares.style.height = `${960 / gridSize}px`;
    gridSquares.addEventListener("mouseover", function () {
      this.style.backgroundColor = "pink";
    });
  }
}

gridSizeBtn.addEventListener("click", function () {
  gridSize = prompt("Select Grid Size 16,32,64,...etc");
  if (gridSize < 100) {
    overallSquares = gridSize * gridSize;
  } else {
    alert("Please select a number smaller than 100");
  }
  initializeGrid();
});
