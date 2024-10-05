/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

//if max distance >= nums.length. return true

//if nums[i] > max distance, new max distance

// if max distance = 0, return false

let maxDistance = 0;

for (let i = 0; i < nums.length; i++){
    maxDistance = Math.max(maxDistance, nums[i])
    if (maxDistance + 2 > nums.length - i){
        return true;
    }
    if (maxDistance === 0 ){
        return false;
    }
    maxDistance--
}

};
