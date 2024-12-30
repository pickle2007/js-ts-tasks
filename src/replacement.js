/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let value = Math.abs(arr[i]);
    if (value < 10) {
      result.push(1);
    } else if (value < 100) {
      result.push(2);
    } else if (value < 1000) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
};
