//what is an expression


var a  = 2+3
console.log(a)

//function as Expression
var add = function(a,b){
    // console.log(a+b)
    return a+b
}

var sum = add

var result = sum(3,4)
console.log(result)