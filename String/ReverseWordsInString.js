function reverseWords(str) {
    var reversedString = "";
    var currentWord = "";
  
    for (var i = str.length - 1; i >= 0; i--) {
      if (str[i] !== " ") {
        // Build the current word
        currentWord = str[i] + currentWord;
      } else if (currentWord !== "") {
        // Add the reversed word to the final string
        reversedString += currentWord + " ";
        currentWord = "";
      }
    }
  
    // Add the last word (if any) to the final string
    if (currentWord !== "") {
      reversedString += currentWord;
    }
  
    return reversedString;
  }
  
  // Example usage
  var inputString = "Hello World!";
  var reversedString = reverseWords(inputString);
  console.log(reversedString); // Output: "World! Hello"
  