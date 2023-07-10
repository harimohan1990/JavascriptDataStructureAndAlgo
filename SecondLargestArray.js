function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least 2 elements";
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    if (secondLargest === -Infinity) {
        return "No second largest element found";
    }
    return secondLargest;
}
const array = [5, 10, 2, 8, 15];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 10
