/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (!num) return false;
  
  // perform binary search on array,
  function searchSquare(start, end, target) {
      if (start >= end) return target === start ** 2;
      
      let pivot = Math.floor((start + end) / 2);
      
      if (pivot ** 2 === target) {
          return true;
      } else if (pivot ** 2 < target) {
          return searchSquare(pivot + 1, end, target)
      } else {
          return searchSquare(start, pivot - 1, target)
      }
      
  }
  
  return searchSquare(1, num, num);
};