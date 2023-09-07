const mainGrid = document.querySelector('.main-grid');
let gridSquares;

// function startAll () {

// }

let sps = 256;
function initialzingGrid() {
  for(let i = 0; i < sps; i++) {
    gridSquares = document.createElement('div');
    gridSquares.className = 'grid-squares';
    mainGrid.appendChild(gridSquares);
    gridSquares.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'pink';
    });
  }
  
}
initialzingGrid();
