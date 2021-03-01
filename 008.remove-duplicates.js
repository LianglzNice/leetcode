/**
 * @param {number[]} nums
 * @return {number}
 * 解法一
 * 改变原数组的长度，去重
 */
let nums = [0,0,1,1,1,2,2,3,3,4];
let removeDuplicates = nums => {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === nums[i+1]){
            //也可以直接使用 splice 内置方法
            removeItem(nums, i,1);
            i--;
        }
    }
    return nums.length;
};
//手写splice内置方法
let removeItem = (list, index, len) => {
    for(let i=index; i<list.length; i++){
        list[i] = list[i + len];
    }
    list.length = list.length - len;
}

/**
 * 解法二
 * 利用双指针
 * 当快指针与慢指针的数据不同时，慢指针先自增，然后快指针再赋值给慢指针
 * 不改变原数组的长度，不去重
 */

let _removeDuplicates = nums => {
    if(nums.length === 0) return 0;
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
        
    }
    return i+1;
}
console.log(_removeDuplicates(nums));