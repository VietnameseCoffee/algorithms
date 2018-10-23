/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {};
  
  for (let i = 0; i < nums.length; i++) {
      let dif = target - nums[i];
      if (map[nums[i]] !== undefined) {
          return [map[nums[i]], i];
      } else {
          map[dif] = i;
      }
  }
};