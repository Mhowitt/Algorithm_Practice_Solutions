/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  var words = s.split(' ');

  for (var i = words.length - 1; i >= 0; i--) {
      if (words[i].length < 1) {
          continue;
      } else {
          return words[i].length;
      }
  }

  return 0;
}