https://leetcode.com/problems/maximum-subarray/



// O(NlogN)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return mergeFun(nums, 0, nums.length - 1);
    
};


function mergeFun(nums, start, end) {
    //console.log({start, end})
    if(start === end) return nums[start];
    
    let mid = start + Math.floor((end-start)/2);
    
    let lMaxInSubArry = mergeFun(nums, start, mid);
    let rMaxInSubArry = mergeFun(nums, mid+1, end);
    
    let leftMax = Number.MIN_SAFE_INTEGER;
    let rightMax = Number.MIN_SAFE_INTEGER;
    
    // find leftMax sum
    let currentMaxSum = 0;
    
    for(let i = mid ; i >= 0 ; i--) {
        currentMaxSum  += nums[i];
        leftMax = Math.max(leftMax, currentMaxSum)
    }
    
     currentMaxSum = 0;
    for(let i = mid+1; i <= end; i++) {
        currentMaxSum += nums[i];
        rightMax = Math.max(rightMax, currentMaxSum)
    }
    let midNum = nums[mid]
   // console.log({leftMax,rightMax,  midNum, start, end, mid})
    let finalSum = leftMax+rightMax;
   // console.log({lMaxInSubArry, rMaxInSubArry, finalSum })
    return Math.max(lMaxInSubArry, rMaxInSubArry, finalSum);
    
}

// O(N)


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let len = nums.length;
    if(!len) return 0;
    
    let totalMaxSum = nums[0];
    let currMaxSum = nums[0];
    
    for(let i= 1; i < len; i++) {
        currMaxSum = Math.max(nums[i], nums[i] + currMaxSum);
        totalMaxSum = Math.max(totalMaxSum, currMaxSum);
    }
    return totalMaxSum;
};