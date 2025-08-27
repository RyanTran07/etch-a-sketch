const gridContainer = document.querySelector(".container");

createGrid(16, 16);

// Create a 16 x 16 grid of divs
function createGrid(rowSize, columnSize) {
    for(let rowNum = 0; rowNum < rowSize; rowNum++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for(let column = 0; column < columnSize; column++) {
            const individualCell = document.createElement("div");
            individualCell.classList.add("cell");
            individualCell.classList.add(rowNum + "-" + column);
            row.appendChild(individualCell);
            console.log("Cell created and appended");
        }

        console.log("Row created");
        gridContainer.appendChild(row);
        console.log("Row appended to container");
    }

    hover();
}

// Event listener for each cell to change color on hover
function hover() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "red";
        });
    });
}


const newGridButton = document.querySelector(".set-grid");
newGridButton.addEventListener("click", () => {
    let gridSize = prompt("Enter new grid size (max 100): ");
    while(gridSize > 100) {
        gridSize = prompt("Please enter a number less than or equal to 100: ");
    }

    const cells = document.querySelectorAll(".cell");
    // Clear the existing grid
    cells.forEach((cell) => {
        cell.remove();
    });

    createGrid(gridSize, gridSize);
    hover();

});
