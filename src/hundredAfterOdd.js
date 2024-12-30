/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let result = [];
  let i = 0;

  while (i < arr.length) {
    result.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      1;
      result.push(100);
    }
    i++;
  }

  return result;
};
