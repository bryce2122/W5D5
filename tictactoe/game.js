
const readline = require('readline');
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


class Game {
  constructor(board,player1,player2) {
    this.board = board;
    this.player1 = player1;
    this.player2 = player2;
  }




           makeMove() {

    reader.question('Pick a position', function (input) {
      input = input.split(',');
      let [x,y] = input;
      this.grid[y][x] == player.mark;
    });





  }




}
