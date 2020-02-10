///////////////////// CONSTANTS /////////////////////////////////////
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
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
win = null;

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

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (
      board[condition[0]] &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      winner = board[condition[0]];
    }
  });

  return winner;
}
