// ## Challenge 3:
// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 
// Return true if either of them falls within the range.

function numInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

let num1 = 20;
let num2 = 89;
let value = numInRange(num1, num2);
console.log(value); // This will output: true
