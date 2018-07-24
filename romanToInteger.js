// /**
//  * @param {string} s
//  * @return {number}
//  */
var romanToInt = function(s) {
  const romanTranslation = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  let romanValue = s.split('');
  let result = 0;

  for (let i = 0; i < romanValue.length; i++) {
      if (i > 0 && (romanTranslation[romanValue[i]] > romanTranslation[romanValue[i -1]])) {
          result -= 2 * romanTranslation[romanValue[i-1]]
      }

      result += romanTranslation[romanValue[i]]
  }

  return result
};