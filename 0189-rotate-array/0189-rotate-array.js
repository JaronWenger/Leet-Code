/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

k %= nums.length

//rotate all
flip(nums, 0, nums.length-1)

//rotate k through nums.length-1
flip(nums, k, nums.length-1)

// rotate 0-k-1
flip(nums, 0, k-1)


function flip(nums, start, end){
    while(start < end){
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

}
