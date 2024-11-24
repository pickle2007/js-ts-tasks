/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const changedNumber = Math.abs(n).toString().split('').map(Number);
  let final = 0;
  let i = 0;
  while (i < changedNumber.length) {
    final += changedNumber[i];
    i++;
  }
  return final;
};
