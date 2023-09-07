const mainGrid = document.querySelector('.main-grid');
function createGrid() {
  for(let i = 0; i < 256; i++) {
    // mainGrid.appendChild(document.createElement('div'));
    let gridSquares = document.createElement('div');
    gridSquares.className = 'grid-squares';
    mainGrid.appendChild(gridSquares);
    console.log('created')
  }
}
createGrid();