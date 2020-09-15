

// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    
    let p1 = num1.length-1;
    let p2 = num2.length - 1;
    let reminder = 0;
    let result = '';
    while( p1>=0 || p2 >= 0 || reminder) {
        
        let x1 = p1 >=0 ? num1.charCodeAt(p1) - '0'.charCodeAt(0) : 0;
        let x2 =  p2 >= 0 ? num2.charCodeAt(p2) - '0'.charCodeAt(0) : 0;
        
        let sum = (x1 + x2 + reminder);
         reminder = Math.floor(sum / 10);
        result = `${sum %10}${result}`;
        p1--;
        p2--;
    }
    
    return result;
};