const nums = [4, 6, 2, 1];

function selectionSort(arr) {
  for (let i = 0; i < arr.lenght; i++) {
    let smallest = i;

    for (let j = i + 1; j < arr.lenght; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
      if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort(nums));
