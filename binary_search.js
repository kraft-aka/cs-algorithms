const nums = [20, 50, 10, 60, 70, 90, 80, 30,15];

// sort an array
//console.log(sortedArray)

function binarySearch(arr, searchItem) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let middleArrayIndex;
  console.log(right, left, arr);
  while (left < right) {
    middleArrayIndex = Math.floor(arr.length / 2);
    console.log(middleArrayIndex)
    if (arr[middleArrayIndex] === searchItem) {
      return searchItem;
    } 
     if (arr[middleArrayIndex] < searchItem) {
      left = middleArrayIndex + 1;
    } else {
      right = middleArrayIndex - 1;
    }
    return -1;
  }
}

let result = binarySearch(nums, 10);
console.log(result)