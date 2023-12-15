const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countS1 = s1.split('').reduce((acc,el) => {acc[el] = (acc[el] || 0) + 1; return acc},{});
  let countS2 = s2.split('').reduce((acc,el) => {acc[el] = (acc[el] || 0) + 1; return acc},{});
  
  result = 0

  for (const key in countS1) {
    if (countS2.hasOwnProperty(key)) {
      result += Math.min(countS1[key], countS2[key]);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
