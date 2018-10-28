/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let integers = timePoints.map((el) => parseTime(el))
  integers.sort((a, b) => a - b)
  
  let top = (1440 + integers[0]) - integers[integers.length - 1]
  let bot = (integers[integers.length - 1] - integers[0])
  
  let min = Math.min(top, bot);
  
  
  for (let i = 0; i < integers.length - 1; i++) {
      let top = (1440 + integers[i]) - integers[i + 1]
      let bot = (integers[i + 1] - integers[i])
      let currentMin = Math.min(top, bot)
      if (min > currentMin) min = currentMin;
  }
  
  return min;
};

var parseTime = function(str) {
  let arr = str.split(":");
  let sum = parseInt(arr[0]) * 60;
  return sum += parseInt(arr[1])
}