// https://leetcode.com/problems/find-all-anagrams-in-a-string/


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let pArry = new Array(26).fill(0);
    for (let i = 0; i < p.length; i++) {
        const charCode = getCharCode(p[i]);
        pArry[charCode]++
    }

    let start = 0;
    let end = 0;
    let count = 0
    let sArry = new Array(26).fill(0);
    let result = [];
    while (end < s.length) {
        let sCharCode = getCharCode(s[end]);
        sArry[sCharCode]++;
        count++;
        if (count === p.length) {
            // match sArry and pArry
            if (pArry.join('') === sArry.join('')) {
                result.push(start);
            }
            const startCharCode = getCharCode(s[start]);
            sArry[startCharCode]--;
            count--;
            start++;
        }
        end++;
    }
    return result;
};

function getCharCode(i) {
    return i.charCodeAt(0) - 'a'.charCodeAt(0);
}