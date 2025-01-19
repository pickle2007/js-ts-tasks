/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      if (typeof arr[i] === 'object' && typeof value === 'object') {
        let objectEqual = true;

        for (let key in value) {
          if (arr[i][key] !== value[key]) {
            objectEqual = false;
            break;
          }
        }

        if (Array.isArray(arr[i]) && Array.isArray(value)) {
          if (arr[i].length !== value.length) {
            objectEqual = false;
          } else {
            for (let j = 0; j < arr[i].length; j++) {
              if (arr[i][j] !== value[j]) {
                objectEqual = false;
                break;
              }
            }
          }
        }

        if (!objectEqual) {
          newArr.push(arr[i]);
        }
      } else {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
};
