const mainGrid = document.querySelector(".main-grid");
const gridSizeBtn = document.querySelector(".gs-btn");
const resetGridBtn = document.querySelector(".reset-btn");
const gridDimensions = 960;
const colorPickerEl = document.querySelector(".colorPicker");
const colorModeBtn = document.querySelector(".color-btn");
const discoModeBtn = document.querySelector(".disco-btn");

let gridSquares;
let gridSize;
let overallSquares;
let gridSizeSet = false; // Initialize a flag to track whether grid size is set
let color;
let currentMode = "color";

function initializeGrid() {
  if (!gridSizeSet) {
    // Check if grid size is not already set
    if (!gridSize) {
      gridSize = prompt("Select Grid Size (e.g., 16, 32, 64, etc.):");
      if (gridSize < 100) {
        overallSquares = gridSize * gridSize;
        gridSizeSet = true; // Set the flag to indicate grid size is set
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
        if (currentMode == "color") {
          color = colorPickerEl.value;
          this.style.backgroundColor = color;
        }
        else if (currentMode == "disco") {
          randomColorGenerator()
          // color = randomColor
          this.style.backgroundColor = color;
        }
      });
    }
  }
}

function resetGrid() {
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
  gridSquares = 0;
  gridSize = 0;
  overallSquares = 0;
  gridSizeSet = false; // Reset the flag when the grid is reset
}

function colorMode() {
  currentMode = "color";
}

function discoMode() {
  currentMode = "disco";
}

function randomColorGenerator() {
  let redValue = Math.floor(Math.random() * 256);
  let greenValue = Math.floor(Math.random() * 256);
  let blueValue = Math.floor(Math.random() * 256);

  let randomColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  color = randomColor;
}

gridSizeBtn.addEventListener("click", function () {
  initializeGrid();
});

colorModeBtn.addEventListener("click", function () {
  colorMode();
});

discoModeBtn.addEventListener("click", function () {
  discoMode();
  randomColorGenerator();
});

resetGridBtn.addEventListener("click", function () {
  resetGrid();
});
