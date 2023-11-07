const readline = require('readline')

// Create readline interface for input/output
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


function reverseNumber(x){
    let reversed  = 0
    while(x!== 0){
        const digit = x %10
        reversed = reversed * 10 +digit
        x =Math.floor(x / 10)
    }
    return reversed
}

// const x =32243
// const reversed = reverseNumber(x)
// console.log(reversed)
// Handle the close event
rl.on('close', () => {
    console.log('\nOperation terminated by the user');
    process.exit(0);
});

// Catch CTRL+C (SIGINT) and close readline properly
rl.on('SIGINT', () => {
    rl.close();
});

// Catch any unexpected errors
rl.on('error', (error) => {
    console.error(`An error occurred: ${error.message}`);
    rl.close();
});


rl.question("Please enter the number to reverse: ",(input)=>{
    const num = parseInt(input)
    if(!isNaN(num)){
        const reversed = reverseNumber(num)
        console.log(`The reversed number is: ${reversed}`)
    }else{
        console.log("You did't enter a right number")
    }

    rl.close()
})

