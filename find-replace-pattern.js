/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
  let results  = [];
  
  words.forEach((el) => {
      let map = {};
      let marked = {};
      
      for (let i = 0; i <el.length;i++) {
          

          if (!map[el[i]]) {
              if (marked[pattern[i]]) {
                  return;
              } else {
                  marked[pattern[i]] = true;
                  map[el[i]] = pattern[i];
              } 
          } else {
              if (map[el[i]] !== pattern[i]) return;
          }
          
      }
      
      results.push(el)
  })
  
  return results;
};