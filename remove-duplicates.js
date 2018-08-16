/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var j = 0;
  var i = 0;
  for (l = nums.length; i < l; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }
  return j + 1;
};
