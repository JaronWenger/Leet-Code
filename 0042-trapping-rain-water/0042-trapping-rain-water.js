/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    const n = height.length;
    if (n === 0){
        return 0;
    }
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    let gains = 0;

    //Max from the left
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i-1], height[i]);
    }

    //Max from the right
    rightMax[n-1] = height[n-1];
    for (let i = n-2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i+1], height[i]);
    }

    for (let i = 0; i < n; i++){
        gains += Math.min(leftMax[i],rightMax[i]) - height[i]
    }

    return gains;
};