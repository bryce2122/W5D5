// class Clock {
//   constructor() {
//     this.date = new Date();
//     this.time = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
//     this.printTime();
//
//     setInterval(this._tick.bind(this),1000);
//   }
//
//   printTime() {
//     console.log(this.time);
//   }
//
//   _tick() {
//     this.incrementInterval();
//     this.printTime();
//   }
//
//   incrementInterval() {
//     this.date = new Date();
//     this.time = `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
//   }
//
// }
//
// const clock = new Clock();
//
const readline = require('readline');
const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }

  else if (numsLeft > 0) {
    reader.question('Give me a number', function (input) {
      sum = sum + parseInt(input);
      numsLeft = numsLeft - 1;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  }



  }


  addNumbers(0,3,sum => {
    console.log("Process complete");
    return;
  });



// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
