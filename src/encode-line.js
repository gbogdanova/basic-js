const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;
  return [...str].reduce((acc,el,ind) => {
    if(str[ind + 1] !== el){
      if (n > 1){
        acc.push(n);
      }
      acc.push(str[ind]);
      n = 1;
    }else{
      n++;
    }
    return acc;
  },[]).join('');
}

module.exports = {
  encodeLine
};
