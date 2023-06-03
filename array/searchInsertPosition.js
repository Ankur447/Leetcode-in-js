/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]>=target){
            return i;
        }
    }
    return nums.length;
};//lol
//spce = o(1)
// Time = o(n) since iteration goes from 0 to n in worst case ig