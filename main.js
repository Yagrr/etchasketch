const grid = document.querySelector('.grid')

let xSize = 16;
let ySize = 16;

createGrid();
activateColors();

// dropdown menu function
function dropMenu() {
    document.getElementById("id-dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const btnSize1 = document.getElementById('size1');
btnSize1.addEventListener("click", () => {
    if (xSize != 16) {
        xSize = ySize = 16;
        resetGrid();
    }
})
const btnSize2= document.getElementById('size2');
btnSize2.addEventListener("click", () => {
    if (xSize != 32) {
    xSize = ySize = 32;
    resetGrid();
    }
})
const btnSize3= document.getElementById('size3');
btnSize3.addEventListener("click", () => {
    if (xSize != 64) {
    xSize = ySize = 64;
    resetGrid();
    }
})

const btnReset = document.querySelector('.btn-reset')
btnReset.addEventListener("click", () => {
    resetGrid();
})

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
            let cellAlpha = 10;
            if (cell.textContent === '' || cell.textContent === '0') {
               cell.textContent = '10';
            } else {
                cellAlpha = Number(cell.textContent) - 1;
            }
            cell.textContent = cellAlpha;
            cell.style.backgroundColor = getRandomColor(cellAlpha*0.1);
            getAudio(cell);
        });
    });
}

// audio sourced from Pixabay. Author: floraphonic
function getAudio(element) {
    audioArray = ["pop1","pop2","pop3","pop4","pop5","pop6"];
    let rng = Math.floor(Math.random()*audioArray.length);
    let audio = document.createElement("audio");
    audio.src = "audio/" + audioArray[rng] + ".mp3";
    element.appendChild(audio)
    audio.volume = 0.01;
    audio.play();
}

function getRandomColor(alpha) {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 70%,' + alpha + ')';
}

function resetGrid() {
    grid.innerHTML = '';
    createGrid(xSize,ySize);
    activateColors();
}

