
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
      sum = sum + parseInt(input);
      numsLeft = numsLeft - 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });





  }




}
