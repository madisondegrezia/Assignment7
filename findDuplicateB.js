// SET B QUESTION 3 using fast/slow pointers

/* 
- fast and slow pointers are both initialized to the first value in the array
- you want to reach a point of intersection
- slow pointer should be incremented by one step and fast pointer should be 
incremented by 2 steps
- slow pointer should then be reinitialized to the beginning and try to intersect
the fast pointer
- when they finally catch up to each other and the two pointers intersect, the duplicate has been found
- return the value for slow 
*/

// function to find a duplicate in an array using fast/slow pointer algorithm

function findDuplicateB(nums) {
  // both are set to the beginning of the array
  let slow = nums[0];
  let fast = nums[0];
  // Move slow pointer by one step and fast pointer by two steps
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  // Move slow pointer to the start and continue until it reaches the point of
  // intersection
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

console.log(findDuplicateB([1, 3, 4, 2, 2])); //2
console.log(findDuplicateB([3, 1, 3, 4, 2])); //3

module.exports = findDuplicateB;
