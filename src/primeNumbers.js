/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (start, end) {
    const isPrime = num => {
      if (num < 2) return false;
      let divisor = 2;
      while (divisor <= Math.sqrt(num)) {
        if (num % divisor === 0) return false;
        divisor++;
      }
      return true;
    };

    const result = [];
    let current = Math.max(2, start);
    while (current <= Math.min(limit, end)) {
      if (isPrime(current)) result.push(current);
      current++;
    }
    return result;
  };
};
