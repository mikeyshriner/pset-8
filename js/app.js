///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;
let turn;
let win;
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h2");   // grab the subheader
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;

document.getElementById("board").onclick = takeTurn;
///////////////////// FUNCTIONS /////////////////////////////////////
function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

turn = "X";

  render();   // we'll write this later
}
function render() {
  board.forEach(function(mark, index) {
    console.log(mark, index);
     squares[index].textContent = mark;    // writes an X or an O on boards
  });

 message.textContent = `Turn: ${turn}`;

}

function takeTurn(e) {
  let index = squares.findIndex(function(square) {
    return square === e.target;
  });
  board[index] = turn;
  turn = turn === "X" ? "O" : "X";  // alternate turns

  render();
}
