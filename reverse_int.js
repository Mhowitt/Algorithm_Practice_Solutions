// /**
//  * @param {number} x
//  * @return {number}
//  */
var reverse = function(x) {
  let numString = x.toString().split('').reverse().join('');

  var maxInt = Math.pow(2, 31)

  let result = parseInt(numString) * Math.sign(x);

  if (result > (maxInt - 1) || result < -(maxInt + 1)) {
      return 0;
  } else {
      return result
  }

};