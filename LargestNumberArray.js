function findLargestNumber(arr){
    let largest = arr[0];
    for(let i=0;i<arr.length;i++){
      if(arr[i] > largest){
        largest = arr[i]
      }
    }
    return largest;
  }
  const numbers = [5, 8, 2, 10, 3];
  console.log(findLargestNumber(numbers));