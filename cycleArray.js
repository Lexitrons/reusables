/**
 * For infitie loop through a number set  
 * checks for negative numbers and if negative will return the index for the last item in the array,
 * if key value is larger than the length it will return 0
 * if key is within the range it will return itself
 *
 * @param {Number} num - the desired number
 * @param {Number} num - the maximum length
 * @return {Number} - returns an number
 */

export const cycle = (key = 0, length = 0) => {
  if (Math.sign(key) === -1) return length - 1;
  if ( key >= length ) return 0;
  return key;
};
