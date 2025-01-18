/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let farthest = 0; // Tracks the farthest index we can reach
    for (let i = 0; i < nums.length; i++) {
        if (i > farthest) {
            return false; // If current index is beyond farthest reachable, return false
        }
        farthest = Math.max(farthest, i + nums[i]); // Update the farthest point
        if (farthest >= nums.length - 1) {
            return true; // If we can reach or exceed the last index, return true
        }
    }
    return true; // If loop finishes, we can reach the last index
}
