const mainGrid = document.querySelector(".main-grid");
const gridSizeBtn = document.querySelector(".gs-btn");
const resetGridBtn = document.querySelector(".reset-btn");
const gridDimensions = 960;

let gridSquares;
let gridSize;
let overallSquares;

function initializeGrid() {
  for (let i = 0; i < overallSquares; i++) {
    gridSquares = document.createElement("div");
    gridSquares.className = "grid-squares";
    mainGrid.appendChild(gridSquares);
    gridSquares.style.width = `${gridDimensions / gridSize}px`;
    gridSquares.style.height = `${gridDimensions / gridSize}px`;
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

function resetGrid() {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  gridSquares = 0;
  gridSize = 0;
  overallSquares = 0;
}

resetGridBtn.addEventListener("click", function () {
  console.log("Resetting Grid");
  resetGrid();
}
);
