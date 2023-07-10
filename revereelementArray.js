function reverseArray(arr) {
    var reversed = [];
    
    for (var i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    
    return reversed;
  }
  
  var array = [1, 2, 3, 4, 5];
  var reversedArray = reverseArray(array);
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
  