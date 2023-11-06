function reverseNumber(x){
    let reversed  = 0
    while(x!== 0){
        const digit = x %10
        reversed = reversed * 10 +digit
        x =Math.floor(x / 10)
    }
    return reversed
}

const x =32243
const reversed = reverseNumber(x)
console.log(reversed)

