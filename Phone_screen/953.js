
// https://leetcode.com/problems/verifying-an-alien-dictionary/

var isAlienSorted = function(words, order) {
    let map = new Map();
    
    for(let i = 0 ; i < order.length; i++) {
        map.set(order[i], i);
    }
    
    for(let i = 0; i < words.length - 1; i++) {
        let curr = words[i];
        let next = words[i+1];
   
        
        // check the first char of each word 
         if(map.get(curr[0]) > map.get(next[0])) return false;  
            
        // if first char is equal in both words, need to check next char match
        // untill, we get a differ letter
        if(curr[0] === next[0] ) {
            let pointer = 1;
            while(curr[pointer] === next[pointer]) pointer++;
            // after comparision, if second string length is more      
            if(!next[pointer]) return false;
            if(map.get(curr[pointer]) > map.get(next[pointer])) return false;
            
        }
    }
        
        return true;
};