// /**
// //  * @param {number} x
// //  * @return {boolean}
//  */
var isPalindrome = function(x) {
  let strNum = x.toString().split('').reverse().join('')
  return x.toString() === strNum

};