const grid = document.querySelector('.grid')
createGrid();
activateColors();

const btnReset = document.querySelector('.btn-reset')
btnReset.addEventListener("click", () => {
    resetGrid();
});

function createGrid(xAxis=16,yAxis=16) {

    for (let i = 0; i < yAxis; i++) {
        let gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let k = 0; k < xAxis; k++) {
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
        }
        grid.appendChild(gridRow);
    }
}

function activateColors() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
           cell.style.backgroundColor = getRandomColor();
        });
    });
}

function getRandomColor() {
    return 'hsl(' + (Math.random() * 360) + ', 100%, 70%)';
}

function resetGrid() {
    grid.innerHTML = '';
    createGrid();
    activateColors();
}

