
function reverseString(str){
    let reversed = '';
     for(let i= str.length-1;i>=0;i--){
        reversed += str[i];
     }
     return reversed
}

console.log(reverseString('Hello')); // Output: olleH

or 

function reverseWords(str) {
    // Split the string into an array of words
    var wordsArray = str.split(" ");
  
    // Reverse the order of the words in the array
    var reversedArray = wordsArray.reverse();
  
    // Join the words in the array back into a string
    var reversedString = reversedArray.join(" ");
  
    // Return the reversed string
    return reversedString;
  }
  
  // Example usage
  var inputString = "Hello World!";
  var reversedString = reverseWords(inputString);
  console.log(reversedString); // Output: "World! Hello"
  