// **Challenge 7**  
// Write a JavaScript program to check a pair of numbers and return true 
// if one of the numbers is 50 or if their sum is 50.
const readline = require('readline')
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

function checkPair(num1,num2){
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        return true;
    }
    return false
}

r1.question("Please enter the first number : ",function(num1){
    r1.question("Please enter the second number : ",function(num2){
        let a = parseInt(num1)
        let b = parseInt(num2)

        let result = checkPair(a,b)
        console.log(`Result of ${a} and ${b} is ${result}`)
        r1.close()
    });
});