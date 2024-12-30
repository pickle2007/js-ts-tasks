/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== value) newArr.push(arr[i]);
  }
  return newArr;
};
