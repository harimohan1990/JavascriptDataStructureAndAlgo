function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(isSorted(numbers));