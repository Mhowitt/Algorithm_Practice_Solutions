/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  var mid;
  while(start < end - 1) {
      mid = start + Math.floor((end - start) / 2);
      if (nums[mid] < nums[end]) {
          end = mid;
      } else {
          start = mid;
      }
  }
  if (nums[start] > nums[end]) {
      return nums[end];
  }
  return nums[start];

};