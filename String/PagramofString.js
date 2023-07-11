function isPangram(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();
  
    // Create an object to store the occurrence of each letter
    var letterCount = {};
  
    // Iterate over the string and count the occurrence of each letter
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      // Ignore non-alphabet characters
      if (char >= 'a' && char <= 'z') {
        letterCount[char] = true;
      }
    }
  
    // Check if all the letters of the alphabet are present
    for (var letter = 'a'; letter <= 'z'; letter++) {
      if (!letterCount[letter]) {
        return false;
      }
    }
  
    return true;
  }
  
  var inputString = "The quick brown fox jumps over the lazy dog";
  console.log(isPangram(inputString)); // Output: true
  
  inputString = "Hello World";
  console.log(isPangram(inputString)); // Output: false
  