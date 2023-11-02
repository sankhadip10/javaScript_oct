//in js objects are key -val pait

var person ={
    firstName : "Adam",
    secondName:'Smith',
    age:25,
    ownCar :false
}

console.log(person)

//dot notation

console.log(person.age)

//bracket notation

console.log(person['firstName'])




var cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    age:102,
    friends:['Bucky Barnes','Bruce Banner','Tony Stark'],
    isAvenger:true,
    address:{
        state:'New York',
        city :{
            name:'Brroklyn',
            pincode:12345
        }
    }
}

console.log(cap.friends[1])
console.log(cap.address.city.name)

cap.isAvenger=false

console.log(cap)



cap.movies=['age of ultron','civil war','age of ultron']
console.log(cap)

delete cap.age

console.log(cap)