const grid = document.querySelector('.grid')
createGrid();

function createGrid() {
    let xAxis = 16;
    let yAxis = 16;


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

function resetGrid() {
    grid.innerHTML = '';
}

