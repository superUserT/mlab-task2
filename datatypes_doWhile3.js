let num;

do {
  num = parseInt(prompt("Enter a number greater than 10:"));
} while (num <= 10 || isNaN(num));

console.log("You entered:", num);
