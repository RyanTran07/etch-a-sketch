gridContainer = document.querySelector(".grid-container");
let gridSquareSize;
gridCell = document.querySelector(".grid-cell");
isRainbow = false;
gridSize = 16;

// Main method (calls all of the needed functions)
createGrid(gridSize);

function createGrid(gridSize) {
    gridSquareSize = gridContainer.clientWidth / gridSize;
    // Creating rows
    for(let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row");
        console.log("row created")

        // Creating individual cells
        for(let column = 0; column < gridSize; column++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.style.backgroundColor = "white";
            gridCell.style.height = gridSquareSize + "px";
            gridCell.style.width = gridSquareSize + "px";
            gridRow.appendChild(gridCell);

            console.log("cell created");
        }

        // Append the row to the gridContainer
        gridContainer.appendChild(gridRow);
        console.log("row appended");
    }

    hover();
}

// Returns a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

// Contains color changing on hover functionality
function hover() {
    const gridCells = document.querySelectorAll(".grid-cell");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if(isRainbow === true) {
                color = getRandomColor();
                cell.style.backgroundColor = color;
            }

            else {
                cell.style.backgroundColor = "red";
            }
        });
    });
}

function clearGrid() {
    const cells = document.querySelectorAll(".grid-cell");

    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });

}

function deleteGrid() {
    const cells = document.querySelectorAll(".grid-cell");

    cells.forEach((cell) => {
        cell.remove();
    });
}

//Set Grid
const setGridButton = document.querySelector(".set-grid-button");

setGridButton.addEventListener("click", () => {
    gridSize = prompt("Please enter a grid size: ");

    if(gridSize > 100) {
        gridSize = prompt("Please enter a number less than or equal to 100: ");
    }

    deleteGrid();
    createGrid(gridSize);
});

// Rainbow button event handler
const rainbowButton = document.querySelector(".rainbow-button");

// if clicked,
rainbowButton.addEventListener("click", () => {
    if(isRainbow === true) {
        isRainbow = false;
    }

    else if(isRainbow === false) {
        isRainbow = true;
    }
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
    clearGrid();
    console.log("grid cleared");
});
