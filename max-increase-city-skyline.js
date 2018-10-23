/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let maxI = {};
  let maxJ = {};
  let sum = 0;
  
  for (let i=0; i<grid.length;i++) {
      
      for(let j=0;j<grid.length;j++) {
          if (maxI[i] === undefined || maxI[i] < grid[i][j]) {
              maxI[i] = grid[i][j];
          }
          
          if (maxJ[j] === undefined  || maxJ[j] < grid[i][j]) {
              maxJ[j] = grid[i][j];
          }
      }
  }
  
  for (let i=0; i<grid.length;i++) {
      for(let j=0;j<grid.length;j++) {
          let max = Math.min(maxI[i], maxJ[j]);
          if (grid[i][j] < max) {
              sum += (max - grid[i][j])
          }
      }
  }
  
  return sum;
};