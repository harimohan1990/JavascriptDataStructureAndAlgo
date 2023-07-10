function findValue(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i; // Return the index of the found value
      }
    }
    
    return -1; // Return -1 if the value is not found
  }
 
  var myArray = [3, 6, 2, 9, 4];
  var searchValue = 9;
  var foundIndex = findValue(myArray, searchValue);
  
  if (foundIndex !== -1) {
    console.log("Value", searchValue, "found at index", foundIndex);
  } else {
    console.log("Value", searchValue, "not found in the array");
  }
  