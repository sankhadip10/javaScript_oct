// ## Challenge 2:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

// Example string: 'the quick brown fox'
// Expected Output: 'The Quick Brown Fox '
function firstLetterCapital(sentence){
    val=sentence.split(" ")
    // console.log(val)
    for(let i=0;i<val.length;i++){
        val[i] = val[i].charAt(0).toUpperCase()+val[i].slice(1)
        // console.log(val)
    }
    return val.join(" ")
}


function firstLettercapitalsecond(sen){
    let makeNextUppercase = false
    let res =''

    for(let i =0;i<sen.length;i++){
        if (makeNextUppercase || i===0){
            res +=sen[i].toUpperCase()
            makeNextUppercase = false;
        }else {

            res += sentence[i];
            if (sentence[i] === ' ') {
                makeNextUppercase = true; 
            }
        }
    }
    return res
}

function firstLetterCapital(sentence) {
    let result = '';
  
    // The first character is always capitalized if it's a letter.
    if (sentence.length > 0) {
      result += String.fromCharCode(sentence.charCodeAt(0) >= 97 && sentence.charCodeAt(0) <= 122 ? sentence.charCodeAt(0) - 32 : sentence.charCodeAt(0));
    }
  
    // Iterate over the rest of the sentence.
    for (let i = 1; i < sentence.length; i++) {
      // Check if the current character is a letter immediately following a space.
      if (sentence[i - 1] === ' ' && sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i) <= 122) {
        // Convert lowercase letter to uppercase by subtracting 32 from its char code.
        result += String.fromCharCode(sentence.charCodeAt(i) - 32);
      } else {
        // If it's not a letter that needs to be capitalized, add it as is.
        result += sentence[i];
      }
    }
  
    return result;
  }

let sentence = 'the quick brown fox'
value=firstLetterCapital(sentence)
value1=firstLettercapitalsecond(sentence)
console.log(value)
