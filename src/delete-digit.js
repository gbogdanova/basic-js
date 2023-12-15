const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let deletedNumber = 0;
  let arrNumbers = [...str].reduce((acc, _, ind) => {
    if(ind === 0){ 
      deletedNumber = parseInt(str.slice(1, str.length))
    } else {
      deletedNumber = parseInt(str.slice(0, ind) + str.slice(ind+1,str.length));
    }
    acc.push(deletedNumber);
    return acc;
  },[]);
  return Math.max(...arrNumbers);
}

module.exports = {
  deleteDigit
};
