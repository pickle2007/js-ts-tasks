/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let uniqueElements = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < uniqueElements.length; j++) {
      if (arr[i] === uniqueElements[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueElements.push(arr[i]);
    }
  }

  return uniqueElements.length;
};
