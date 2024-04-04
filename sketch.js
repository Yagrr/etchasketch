const grid = document.querySelector('.grid')
createGrid();

function createGrid() {
    let xAxis = 16;
    let yAxis = 16;

    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");

    for (let i = yAxis; i < yAxis; i++) {
        document.querySelector('.grid').appendChild(gridRow);
        for (let k = xAxis; k < xAxis; k++) {
            let gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            document.querySelector('.grid-row').appendChild(gridBox);
        }
    }
}


