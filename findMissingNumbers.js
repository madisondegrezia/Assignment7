// SET A QUESTION 6 using cyclic sort

/*
- Once again we cyclically sort the array and place undefined elements where 
numbers are missing in counting order.
- However, this time instead of returning the index of the first missing element, 
we return an array with the indices of the missing elements.
- This can be done by pushing the indices of the missing elements into an empty 
array and then returning it once it has been filled.
 */

// function to find all the missing numbers in a given array

function findMissingNumbers(nums) {
  // used for the index to traverse through the array
  let i = 0;
  let n = nums.length;

  // sort the array
  while (i < n) {
    const j = nums[i] - 1;

    // condition to check if the two values are not equal
    if (nums[i] !== nums[j]) {
      //swap values
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      // increment the index
      i++;
    }
  }

  // instantiate array to store the missing values
  let missingNumArr = [];

  // traverse through the array
  for (i = 0; i < n; i++) {
    // checks if the value is equal to the index
    if (nums[i] !== i + 1) {
      // stores the missing value in the new array
      missingNumArr.push(i + 1);
    }
  }

  // return array of missing values
  return missingNumArr;
}

console.log(findMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // [5, 6]
console.log(findMissingNumbers([1, 1])); // [2]

module.exports = findMissingNumbers;
