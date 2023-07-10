// SET A QUESTION 1 using cyclic sort

/* 
- To solve this problem, we first need to cyclically sort the array 
in a way that leaves undefined elements where a missing number would be.
- Then we would have to go through the sorted array and return the index at 
which there is an undefined element. (value at the index !== the index)
- If the array doesn't contain any undefined elements than we would return 
the size of the array as the missing number would be the last element.
*/

function missingNum(nums) {
  let index = 0;
  let n = nums.length;
  // traverse through array and sort it
  while (index < n) {
    let correctIndex = nums[index];
    if (nums[index] < n && nums[index] !== nums[correctIndex]) {
      // swap places
      [nums[index], nums[correctIndex]] = [nums[correctIndex], nums[index]];
    } else {
      // increment index if not true (condition does not hold)
      index++;
    }
  }

  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
}

console.log(missingNum([3, 0, 1]));

/*
Ex: [3, 0, 1]
index = 0;
n = 3
correctIndex = nums[0] => 3
if(3 < 4 && nums[0] !== nums[3]) => if(3 < 4 && 3 !== 0) {
    [1, 0, 3]
}

if(0 < 4 && nums[1] !== nums[3]) => if(0 < 4 && 0 !== 1) {
    [0, 1, 3]
}

=> [0, 1, _ ,3]

traverse through the sorted array
if(value at the index !== the index) return that value
so we return 2

*/

module.exports = missingNum;
