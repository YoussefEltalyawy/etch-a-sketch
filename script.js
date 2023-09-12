const mainGrid = document.querySelector(".main-grid");
const gridSizeBtn = document.querySelector(".gs-btn");
const resetGridBtn = document.querySelector(".reset-btn");
const gridDimensions = 960;
const colorPickerEl = document.querySelector(".colorPicker");
// const defultColor = colorPickerEl.value = "#333333";

let gridSquares;
let gridSize;
let overallSquares;
let gridSizeSet = false; // Initialize a flag to track whether grid size is set

function initializeGrid() {
  if (!gridSizeSet) {
    // Check if grid size is not already set
    if (!gridSize) {
      gridSize = prompt("Select Grid Size (e.g., 16, 32, 64, etc.):");
      if (gridSize < 100) {
        overallSquares = gridSize * gridSize;
        gridSizeSet = true; // Set the flag to indicate grid size is set
        console.log("Grid size is set.");
      } else {
        alert("Please select a number smaller than 100.");
      }
    } else {
      alert("Grid size is already set. Please reset the grid first.");
    }
  } else {
    alert("Grid size is already set. Please reset the grid first.");
  }

  if (gridSizeSet) {
    for (let i = 0; i < overallSquares; i++) {
      gridSquares = document.createElement("div");
      gridSquares.className = "grid-squares";
      mainGrid.appendChild(gridSquares);
      gridSquares.style.width = `${gridDimensions / gridSize}px`;
      gridSquares.style.height = `${gridDimensions / gridSize}px`;
      gridSquares.addEventListener("mouseover", function () {
        const color = colorPickerEl.value;
        this.style.backgroundColor = color;
      });
    }
  }
}

// function discoMode {

// }

function resetGrid() {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  gridSquares = 0;
  gridSize = 0;
  overallSquares = 0;
  gridSizeSet = false; // Reset the flag when the grid is reset
  console.log("Resetting Grid");
}

gridSizeBtn.addEventListener("click", function () {
  initializeGrid();
});

resetGridBtn.addEventListener("click", function () {
  resetGrid();
});
