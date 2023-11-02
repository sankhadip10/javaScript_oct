//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values
//from arrays,or properties from objects,into distinct variables.

let arr = ['hi','I', ,'am','Sankha']

// let a = arr[1]
// let b = arr[2]

// console.log(a)
// console.log(b)

let [a,b,c,d,e] = arr
console.log(a)
console.log(e)
console.log(c)

//destructure object
let myObj ={
    name:'Adam',
    age:25,
    gender:'M',
    address:{
        country:'England',
        city:'London'
    }
}

let {name:n,age:ag,gender:g,address:{country:co,city:ci}}=myObj
console.log(n)
console.log(ag)
console.log(g)
console.log(co)
console.log(ci)