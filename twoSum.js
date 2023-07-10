// SET B QUESTION 2 using fast/slow pointers

/* 
- slow pointer is initialized to the beginning of the array
- fast pointer is initialized to the end of the array (arrayLength - 1)
- let sum = nums[slow] + nums[fast] => this will keep track if the values we have 
add up to the desired target
- instantiate a new array to store the indices of the values that add up to the target
- loop through the array until the sum and target are equal
- if(sum < target) => the slow pointer should be moved to the right by 1 (slow++)
- else move the fast pointer to the left by 1 (fast--)
- update value for the sum each time you loop through the array and move the position of the pointers
- the newArray should container the value for the slow pointer + 1 and the fast pointer + 1
- return the newArray of the two indices who's values up to the desired target
*/

function twoSum(nums, target) {
  let arrLength = nums.length;
  let slow = 0,
    fast = arrLength - 1;
  let sum = nums[slow] + nums[fast];

  // instantiate new array to store the indices
  let newArray = [];
  // checks if desired target is found
  while (sum != target) {
    if (sum < target) {
      // increment slow pointer
      slow++;
    } else {
      // decrement fast pointer
      fast--;
    }
    sum = nums[slow] + nums[fast];
  }

  // constraint 1 <= index < nums.length
  newArray = [slow + 1, fast + 1];

  // return the array of the indices who's values add up to the target
  return newArray;
}

console.log(twoSum([2, 3, 4], 5)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([1, 3, 5, 6], 11)); // [3,4]

module.exports = twoSum;
