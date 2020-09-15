// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let result = s.split(''); // convert string to array
    
    let stack = [];
    
    for(let i = 0 ; i < result.length; i++) {
        if(result[i] === '(') {
            stack.push(i);  // if input is '(' move to stack
        } else if(result[i] === ')') {
            if(stack.length >0) {  // if input is ')' check if there is open exists in stack
                stack.pop();

            } else { // if not then conver that close to empty string
                result[i] = ''
            }
        }
    
    }
    
    // check if stack has any open perenthesis, so conver them to empty string
    for(let i = 0; i < stack.length; i++) {
        result[stack[i]] = '';
    }
    
    return result.join('');
};