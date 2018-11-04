/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const composites = new Array(n + 1);
    const limit = Math.sqrt(n);
    let count = 0;
    
    for (let i = 2; i < limit; i++) {
        let current = i;
        if (current % 2 === 0 && current > 2) continue;
        current += i;
        while (current < n) {
            composites[current] = true;
            current += i;
        }
        
    }
    
    if (n > 2) count++;
    for (let i = 3; i < n; i+=2) {
        if (!composites[i]) count++;
    }
    return count;
}