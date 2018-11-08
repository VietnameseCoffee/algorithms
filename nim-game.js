/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  if (n < 4 && n) return true;
  return n % 4 == 0 ? false : true
};