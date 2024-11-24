/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  const prefixAndSuffix = str.slice(0, num);
  return prefixAndSuffix + str + prefixAndSuffix;
};
