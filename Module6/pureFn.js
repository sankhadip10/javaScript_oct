
let a =10

//Impure Function
function addImpure(x){
    console.log(x+a)
}

addImpure(2)


//Pure Function
function addPure(x,a){
    return x+a
}

console.log(addPure(2,3))