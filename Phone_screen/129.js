// https://leetcode.com/problems/sum-root-to-leaf-numbers/


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
var sumNumbers = function(root) {
    let finalResult = {sum: 0};
    let tmpResult = 0;
    dfs(root, finalResult, tmpResult);
    return finalResult.sum;
};


function dfs(node, finalResult, tmpResult) {
    if(!node) return 0;
    
    // if node is leaf node, add the total path(tmpResult) value to final result
    if(!node.left && !node.right) {
        tmpResult = (tmpResult * 10) + node.val;
        return finalResult.sum += tmpResult;
    }
    
    // it is preOrder traversal, so whenever if you see the node
    // add that result to tmpResult
    tmpResult = (tmpResult * 10) + node.val;
    
    // left traversal
    dfs(node.left, finalResult, tmpResult);
    
    //right traversal
    dfs(node.right, finalResult, tmpResult);
}