// var a = 20
// var a = 35


//Solution of redeclaration problem
let b = 30
b = 45

console.log(a)
console.log(b)

if(true){
    let c = 40
    console.log(c)
}
//variales declared with let keyword are block scoped
console.log(c)


//const keyword
const d  =100
d = 104
console.log(d)




