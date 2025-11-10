/**
 * Write a function named removeDuplicates that takes an integer array `nums`
 * sorted in non-decreasing order, removes the duplicates in-place such that
 * each unique element appears only once. The relative order of the elements
 * should be kept the same.
 *
 * Returns the number of unique elements `k`.
 * The first `k` elements of `nums` should contain the unique numbers in
 * sorted order. The remaining elements beyond index `k - 1` can be ignored.
 *
 * Constraints:
 * - The array is sorted in non-decreasing order.
 * - Modify the array in-place.
 * - Return the number of unique elements.
 */

const removeDuplicates = (nums) => {
  //write your code here
  if (nums.length === 0) return 0;
  let unique = [];
  for (let i = 0; i < nums.length; i++) {
    if (unique.indexOf(nums[i]) === -1) {
      unique.push(nums[i]);
    }
  }
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};

// I was very confused to understand the question theredor i used AI's help to help me understand and come up with the solution


// Example usage (commented out to avoid interference with tests)
// const nums1 = [1, 1, 2];
// console.log(removeDuplicates(nums1)); // → 2
// console.log(nums1); // → [1, 2, _]
//
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums2)); // → 5
// console.log(nums2); // → [0, 1, 2, 3, 4, _, _, _, _, _]

// Export the function for testing
module.exports = { removeDuplicates };
