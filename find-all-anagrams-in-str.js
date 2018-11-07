/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const results = [];
  const range = p.length;
  const sortedP = p.split('').sort().join('');
  
  for (let i = 0; i < s.length - (range - 1); i++) {
      let section = s.slice(i,i+range);
      
      if (section.split('').sort().join('') === sortedP) results.push(i)
  }
  
  return results;
};