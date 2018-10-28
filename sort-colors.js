/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zeroes = 0;
  let ones = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) zeroes++;
      if (nums[i] === 1) ones++;
  }
  
  for (let i = 0; i < nums.length; i++) {
      if (zeroes) {
          nums[i] = 0;
          zeroes--;
          continue;
      }
      if (ones) {
          nums[i] = 1;
          ones--;
          continue;
      }
      nums[i] = 2;
  }
  
}