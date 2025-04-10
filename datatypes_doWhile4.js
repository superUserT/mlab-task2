const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  
  if (guess !== correctNumber) {
    console.log("Wrong guess");
  }
} while (guess !== correctNumber);

console.log("Correct", correctNumber);
