const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function area_triangle(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

rl.question("Please enter the length of side 1: ", function(length1) {
    rl.question("Please enter the length of side 2: ", function(length2) {
        rl.question("Please enter the length of side 3: ", function(length3) {
            let a = parseInt(length1);
            let b = parseInt(length2);
            let c = parseInt(length3);

            // Calculate the result within the final question callback
            let result = area_triangle(a, b, c);
            console.log(`The area of a triangle with sides ${a}, ${b}, ${c} is ${result.toFixed(2)}`);
            rl.close();
        });
    });
});
