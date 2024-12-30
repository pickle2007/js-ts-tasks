/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxLength = 0;
  let result = '';
  let len1 = str1.length;
  let len2 = str2.length;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let temp = '';
      let k = 0;

      while (i + k < len1 && j + k < len2 && str1[i + k] === str2[j + k]) {
        temp += str1[i + k];
        k++;
      }

      if (temp.length > maxLength) {
        maxLength = temp.length;
        result = temp;
      }
    }
  }

  return result;
};
