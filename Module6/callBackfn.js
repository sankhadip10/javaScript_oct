function printFirstName(FirstName,cb){
    console.log(FirstName)
    cb('Rogers')
}

function printLastName(lastname){
    console.log(lastname)
}

printFirstName('Steve',printLastName)



// printLastName('Rogers')

//
const isEven =(n)=>{
    return n%2==0
}


let printResult =(evenFn,num)=>{
    const isNumEven = evenFn(num)

    console.log(`The number ${num} is an Even Number ${isNumEven}`)
}

printResult(isEven,10)




const isOdd =(n)=>{
    return n%2!=0
}

let printResulr = (odd,num)=>{
    const oddNumOdd = odd(num)

    console.log(`the number ${num} is an Odd Number ${oddNumOdd}`)
}

printResulr(isOdd,5)