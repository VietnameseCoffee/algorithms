/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  longest = 0;
  prefix = "";
  
  for (let i = 0; i < strs.length; i++) {
      if (longest < strs[i].length) longest = strs[i].length;
  }
  
  for (let i = 0; i < longest; i++) {
      let match = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
          if (match !== strs[j][i]) return prefix;
      }
      prefix = prefix + match;
  }
  
  
  return prefix;
};