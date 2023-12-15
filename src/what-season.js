const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth() + 1;

  switch (true) {
    case (month >= 1 && month <= 2) || month === 12:
      return 'winter';
    case month >= 3 && month <= 5:
      return 'spring';
    case month >= 6 && month <= 8:
      return 'summer';
    case month >= 9 && month <= 11:
      return 'autumn';
    default:
      throw new Error('Invalid date!');
  }
}


module.exports = {
  getSeason
};
