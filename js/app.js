///////////////////// CONSTANTS /////////////////////////////////////

///////////////////// APP STATE (VARIABLES) /////////////////////////
let board;

function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  render();   // we'll write this later
}
///////////////////// CACHED ELEMENT REFERENCES /////////////////////
const squares = Array.from(document.querySelectorAll("#board div"));
///////////////////// EVENT LISTENERS ///////////////////////////////
window.onload = init;
///////////////////// FUNCTIONS /////////////////////////////////////
function render() {
  board.forEach(function(mark, index) {
    console.log(mark, index);
     squares[index].textContent = mark;    // writes an X or an O on board
  });
}
