const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0){return []}

  let skipRing = false;
  let count = 0;
  return arr.reduce((acc, el, ind) => {
    if(skipRing){
      if(count == 1){
      skipRing = false;
      }
      count++;
    } else if (el === '--discard-next'){
      skipRing = true;
    }
    else if (el === '--double-next') {
      if (ind + 1 < arr.length) {
        acc.push(arr[ind + 1]);
      }
    } else if (el === '--discard-prev') {
      acc.pop();
    } else if (el === '--double-prev') {
      if (ind > 0) {
        acc.push(arr[ind - 1]);
      }
    }
     else {
      acc.push(el);
    }
    return acc;
  }, []);
}
module.exports = {
  transform
};
