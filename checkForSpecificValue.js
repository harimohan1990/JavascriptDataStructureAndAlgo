//Check if an array contains a specific value with method
function containsValue(arr, value) {
    return arr.includes(value);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(containsValue(numbers, 3)); // Output: true
  console.log(containsValue(numbers, 6)); // Output: false