// SET B QUESTION 6 using cyclic sort

/* 
- First we'll define variables for the counter, sum, start, end, 
and length of array.
- Next we look through the array to see if two variables add up 
to our target variable.
- If they do, we increment the counter by 1 and countinue searching 
through the array for more matches until we reach the end.
- Finally, we return the counter which shows how many subarrays 
added up to the target number.
*/

function subArraySum(nums, k) {
  const arrLength = nums.length;
  let count = 0;
  let sum = 0;
  let start = 0;
  let end = 0;

  while (end < arrLength) {
    sum += nums[end];
    while (sum > k) {
      sum -= nums[start];
      start++;
    }
    if (sum === k) {
      count++;
    }
    end++;
  }
  return count;
}

console.log(subArraySum([1, 1, 1], 2));


module.exports = subArraySum;
