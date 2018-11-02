/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let stack = [];
  let newStr = "";
  
  for (let i = 0; i < S.length; i++) {
      let char = S[i];
      if (letters.indexOf(char.toLowerCase()) !== -1) {
          stack.push(char)
      }
  }
  
  for (let i = 0; i < S.length; i++) {
      let char = S[i];
      
      if (letters.indexOf(char.toLowerCase()) === -1) {
          newStr = newStr + char
      } else {
          newStr = newStr + stack.pop();
      }
  }
  return newStr
};