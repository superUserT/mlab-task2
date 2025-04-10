let number = 34; 
let number2 = 60; 
let key = 0;


// if else
if (number % 2 === 0 && number % 3 === 0) {
  console.log("Divisible by both.");
} else if (number % 2 === 0) {
  console.log("Divisible by 2.");
} else if (number % 3 === 0) {
  console.log("Divisible by 3.");
} else {
  console.log("Not divisible by 2 or 3.");
}


// switch statements
if (number2 % 2 === 0) key += 2;
if (number2 % 3 === 0) key += 3;

switch (key) {
  case 5:
    console.log("Divisible by both.");
    break;
  case 2:
    console.log("Divisible by 2.");
    break;
  case 3:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}
