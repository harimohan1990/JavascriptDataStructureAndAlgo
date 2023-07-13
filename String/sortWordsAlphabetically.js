function sortStringAlphabetically(str) {
    var chars = str.split(""); // Convert string to array of characters
  
    // Bubble sort algorithm
    for (var i = 0; i < chars.length - 1; i++) {
      for (var j = 0; j < chars.length - i - 1; j++) {
        if (chars[j] > chars[j + 1]) {
          // Swap characters if they are in the wrong order
          var temp = chars[j];
          chars[j] = chars[j + 1];
          chars[j + 1] = temp;
        }
      }
    }
  
    var sortedStr = chars.join(""); // Convert array of characters back to string
    return sortedStr;
  }
  
  var inputString = "hello";
  var sortedString = sortStringAlphabetically(inputString);
  console.log(sortedString); // Output: "ehllo"