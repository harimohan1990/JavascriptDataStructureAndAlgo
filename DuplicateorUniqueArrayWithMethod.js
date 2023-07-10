function removeDuplicate(arr){
    return Array.from(new Set(arr))
  }
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  
  console.log(removeDuplicate(numbers));

  