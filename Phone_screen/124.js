// https://www.youtube.com/watch?v=TO5zsKtc1Ic

// https://leetcode.com/problems/binary-tree-maximum-path-sum/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let finalResult = {result: Number.MIN_SAFE_INTEGER };
    dfs(root, finalResult);
    return finalResult.result;
    
};


function dfs(node, finalResult) {
    if(!node) return 0;
    
    let leftValue = dfs(node.left, finalResult);
    let rightValue = dfs(node.right, finalResult);
    
    // case1: max of left path or right path include current node or only current node
    
    let case1Result = Math.max(Math.max(leftValue, rightValue) + node.val, node.val);
    
    // case 2: curren node is root of max path
    let case2Result = Math.max(case1Result, leftValue + rightValue + node.val);
    
    // case 3: current node is not part of max result
    
    finalResult.result = Math.max(finalResult.result, case2Result)
    
    // we need to return case1Result because this path may be maximun for pareent node
    return case1Result;
}