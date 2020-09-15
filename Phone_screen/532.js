// https://leetcode.com/problems/continuous-subarray-sum/

/*
For this approach bruteforce is, O(n^2)
means take left pointer and right pointer
- Increment the right pointer and caluculate the sum and check the %k, if it is zero
 take the incides from  [left, right] and return true

 but O(n) approach--
 suppose if we want to calculate sum from index [2, 5]
 eash approach is we alredy have each inded sum starting from 0
 like [0,1], [0,2], [0.3]...[0,5] etc
 so for the sum of [2,5] is substract sum from [0,5] - [0, 1] so that we will 
 get [2,5] sum.

 -> Also (sum1 -sum2) % k = 0 this can be also considered as
    sum1%k  === sum2 % k

    we are going to use above two approached to solve this.

*/

var checkSubarraySum = function(nums, k) {
  let sum = 0;
  let map = new Map();
  map.set(0, -1);  // base case

  for(let i = 0 ; i < nums.length; i++) {
      sum += nums[i];
        // we need this check to avoid if k=0
      let tmpSum = (k !== 0) ? sum % k  : sum;

      if(map.has(tmpSum)) {
        if( i - map.get(tmpSum) > 1) { // check if number of array elements are atlest 2
            return true;
        }
      } else {
          map.set(tmpSum, i)
      }

  }

  return false;
};


// In the above problem if they ask indices
// Return [map.get(tmpSum) + 1, i]