/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    let hash = {};
    let comp = new Set();
    let result;
    
    nums.forEach((num, index) => {
        if (!comp.has(num)) {
            comp.add(target - num);
            hash[num] = index;
        } else {
            result = [(hash[target - num]), index];
        }  
        
    });
    
    return result;
};