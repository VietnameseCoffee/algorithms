/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    
    const map = {};
    const marked = {};
    
    const words = str.split(' ');
    
    if (words.length !== pattern.length) return false;
    
    for (let i = 0; i < pattern.length; i++) {
        if (map[pattern[i]]) {
            if (map[pattern[i]] !== words[i]) return false;
        } else {
            if (marked[words[i]]) return false;
            marked[words[i]] = true;
            map[pattern[i]] = words[i];
        }
    }
    
    return true;
};