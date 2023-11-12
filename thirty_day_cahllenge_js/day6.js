// **Challenge 6**  
// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getSum(number1,number2){
    if (number1 === number2){
        let sum = number1 + number2
        return 3*sum
    }
    return number1+number2
}

rl.question("Please enter the number1: ", function(number1) {
    rl.question("Please enter the number2: ", function(number2) {
       
            let a = parseInt(number1);
            let b = parseInt(number2);

            // Calculate the result within the final question callback
            let result = getSum(a, b);
            console.log(`Sum of number ${a} and number ${b} is ${result}`);
            rl.close();
        });
    });