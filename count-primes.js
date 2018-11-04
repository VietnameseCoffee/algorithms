/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  

  if (n > 2) count++;
  for (let i = 3; i < n; i+=2) {
      if (isPrime(i)) count++;
  }
  return count; 
};

var isPrime = function(n) {
  // if (n <= 1) return false;
  let limit = Math.round(Math.sqrt(n));
  for (i = 2; i <= limit; i++) {
      if (n % i === 0) return false;
  }
  
  return true;
};