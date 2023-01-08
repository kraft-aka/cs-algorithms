const nums = [10,88,880,90,105,3,55];
const str = ['aron', 'bob', 'chris', 'dan','elvis']

function linearSearch (arr, target) {
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      console.log(`${target} is found!`);
      return true
    }
  }
  console.log(`${target} is not found!`)
  return false
}


linearSearch(str, 'd')