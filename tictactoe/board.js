

const readline = require('readline');
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});







class Board {

  constructor(player1,player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.grid = Board.createGrid();
  }

 static createGrid() {
   const grid = [];

   for(var i = 0; i < 3;i++) {
     grid.push([" "," "," "]);
      }
      return grid;
    }

    printGrid() {

      this.grid.forEach(el => {
        console.log(el);
      });

    }
 }

 const board = new Board();
 board.printGrid();
