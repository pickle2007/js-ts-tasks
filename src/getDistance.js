/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const X1 = firstPoint.X,
    Y1 = firstPoint.Y;
  const X2 = secondPoint.X,
    Y2 = secondPoint.Y;
  const distance = Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);
  return Number(distance.toFixed(2));
};
