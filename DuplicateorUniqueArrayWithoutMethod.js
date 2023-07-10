function removeDuplicates(array) {
    var result = [];
    
    for (var i = 0; i < array.length; i++) {
      var isDuplicate = false;
      
      for (var j = 0; j < result.length; j++) {
        if (array[i] === result[j]) {
          isDuplicate = true;
          break;
        }
      }
      
      if (!isDuplicate) {
        result.push(array[i]);
      }
    }
    
    return result;
  }
  var originalArray = [1, 2, 3, 4, 3, 2, 1];
  var uniqueArray = removeDuplicates(originalArray);
  console.log(uniqueArray); 
  