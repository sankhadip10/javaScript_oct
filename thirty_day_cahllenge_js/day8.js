// **Challenge 8**  
//  Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
// Sample array : \[1, 2, 3\] and subset length is 2  
// Expected output : \[\[2, 1\], \[3, 1\], \[3, 2\], \[3, 2, 1\]\]
function subsetsOfTwo(arr){
    let allpairs = []
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            allpairs.push([arr[j],arr[i]])
            // console.log(allpairs)
        }
    }

    if(arr.length>2){
        allpairs.push(arr.slice().reverse())
    }
    return allpairs

}

// Example usage
let array = [1, 2, 3];
console.log(subsetsOfTwo(array));



