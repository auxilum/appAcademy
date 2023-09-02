import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here

const divGrid = document.createElement("div");
divGrid.setAttribute("id", "flex-container");
document.body.appendChild(divGrid);

const battleGrid = function () {
  for (let i = 0; i <= 98; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i);
    div.setAttribute("class", "container");
    divGrid.appendChild(div);
  }
};

battleGrid();
