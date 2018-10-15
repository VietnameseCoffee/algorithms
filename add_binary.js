var addBinary = function(a, b) {
  let sum = getNum(a) + getNum(b);
  return getBinary(sum)
};

var getNum = function(str) {
  let num = parseInt(str);
  let exponent = 0;
  let result = 0;
  
  while (num > 0) {
      result += (num % 10) * (2 ** exponent);
      num = Math.floor(num / 10);
      exponent += 1
  }
  
  return result
}

var getBinary = function(num) {
  if (num === 0) return "0";
  result = "";
  while (num > 0) {
      mod = num % 2;
      result = mod.toString() + result;
      num = Math.floor(num / 2);
  }
  return result
}