//loops are statements that we can use to control the flow of the program and do some repetitive tasks


var a = 'Hello World'
// console.log(a)

//the for loop

for(var i=0;i<=10;i++){
    console.log(a)
}


//you have an array ,you have o square each element of that array
var  num =[2,3,4,5,6,7,8]
var squaredArray = []
for(var i=0;i<num.length;i++){
    squaredArray.push(num[i]*num[i])
}
console.log(squaredArray)