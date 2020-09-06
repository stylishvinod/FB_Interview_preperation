//https://www.youtube.com/watch?v=vZtCKL_OwdA
//https://leetcode.com/problems/partition-equal-subset-sum/solution/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // we can solve this using DP appraoch
    // since getting all subsets and check the sum takes more time
    let sum = nums.reduce((num, total) => total += num, 0);
    
    // we can check if sum is divisible by two, we can divide the set into 
    // 2 parts elese no/
    
    if(sum %2 !== 0) return false;
    
    // create dp for half of sum, because if we are able to get half
    //automatically other half is possible
    let half = sum / 2;
    let dp = new Array(half+1).fill(false);
    dp[0] = true;
    
    //for each num value check how much sum is possible and if
    // dp[half] is true means we can separate to two parts
    for(let i = 0 ; i < nums.length; i++) {
        let num = nums[i];
        for(let j = half; j>= num; j--) {
            dp[j] = dp[j] || dp[j-num];
        }
    }
    
    return dp[half] || false;
    
};