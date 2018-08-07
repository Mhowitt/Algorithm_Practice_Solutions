/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let wordCount = {};
  words.forEach((word) => {
      wordCount[word] ? wordCount[word]++ : wordCount[word] = 1;
  })

  let result = Object.keys(wordCount);

  result.sort((a,b) => {
      if (wordCount[a] > wordCount[b]) {
          return -1;
      } else if (wordCount[a] === wordCount[b]) {
          if(a < b) {
              return -1
          } else if (a > b) {
              return 1;
          } else {
              return 0;
          }
      } else {
          return 1
      }
  })

  return result.slice(0, k)
};