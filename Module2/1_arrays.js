var arr =[12,'dog',true,12.4]
console.log(arr)

//accessing the elements
var a =arr[1]
console.log(arr[3])
//replacing elements of an array
arr[1]='cat'
console.log(arr)

console.log('The length of the array is ',arr.length)

//Inbuilt array methods in js
var arr2 = [12,14,56,57]

//pop method
arr2.pop()

console.log('Pop array',arr2)


//push methid
arr2.push(45)

console.log('Push array ',arr2)


//shift method
var d = arr2.shift()
console.log(d)
console.log('Shifted array',arr2)
 

//unshift 
//unshift will ad at starting of an array

arr2.unshift(102)
console.log('Unshifted Array',arr2)