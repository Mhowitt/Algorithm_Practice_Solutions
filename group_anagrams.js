// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
var groupAnagrams = function(strs) {
  let anagramArr = [];
  let anagramObj = {};
  strs.forEach((str) => {
      let word = str.split('').sort().join('')
      if (anagramObj[word] === undefined) {
          anagramObj[word] = anagramArr.length
          anagramArr.push([str])
      } else {
          anagramArr[anagramObj[word]].push(str)
      }
  })

  return anagramArr;
};