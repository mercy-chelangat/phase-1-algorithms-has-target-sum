function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/
*/  8;

/* 
  Add your pseudocode here
  nitialize two variables, maxSum and currentSum, both set to the first element of the array.
Iterate over the array from the second element.
For each element:
a. Update currentSum as the maximum of the current element and the sum of the current element and currentSum.
b. Update maxSum as the maximum of maxSum and currentSum.
After the iteration, maxSum will contain the maximum sum of the contiguous subarray.
Return maxSum.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  function maxSubArray(nums) {
    if (nums.length === 0) return 0;

    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test Cases
console.log(maxSubArray([1, 2, 3, 4, 5])); // Output: 15
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([-1, -2, -3, -4, -5])); // Output: -1
console.log(maxSubArray([5, -2, 3, -4, 6])); // Output: 8

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
