/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  
  let reverse = String(x).split('').reverse().join('')
  
  
  return x === parseInt(reverse);
};