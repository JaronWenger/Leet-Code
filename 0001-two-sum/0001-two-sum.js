/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (numMap.has(compliment)) {
            return [numMap.get(compliment), i ];
        }

        numMap.set( nums[i], i);
    }
};