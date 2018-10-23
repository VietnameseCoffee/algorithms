/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  
  while (i < nums.length) {
      if (nums[i] === 0) {
          i += 1;
          continue;
      }
      let j = i
      while (j > 0 ) {
          if (nums[j - 1] === 0) {
              [nums[j-1], nums[j]] = [nums[j], nums[j-1]] ;
          } else {
              break;
          }
          j -= 1;
      }   
      i += 1;
  }
};

// technically not in copy
var moveZeroes2 = function(nums) {
  let results = []
  
  for (let i=0; i <nums.length; i++) {
      if (nums[i] !== 0) results.push(nums[i])
  }
  
  for (let j=0; j <nums.length; j++) {
      if (results[j]) {
          nums[j] = results[j];
      } else {
          nums[j] = 0;
      }
  }
};