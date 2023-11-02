//the for of statement creates a loop interating over iterable objects,
//including:built in String,Array,array-like NodeList and also map and set

var scorces = [60,90,80,75]

for(var score of scorces){
    console.log(score)
}
//method  -entries()


let colours = ['Red','White','Green']

for(var [index,colour] of colours.entries()){
    console.log(index+'->'+colour)
}

//string
var str = "Scaler"

for (var c of str){
    console.log(c)
}
