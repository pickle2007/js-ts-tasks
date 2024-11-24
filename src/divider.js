/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  if (k === 0) {
    throw new Error('Division by zero is not allowed');
  }

  const remainer = n % k;
  const whole = (n - remainer) / k;
  return `${whole} ${remainer}`;
};
