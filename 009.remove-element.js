/**
 * 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 解法一
 * 双指针法（前后指针）
 * 前后指针交换前提，前指针与后指针所在位置的数字不相等，相等则后指针减一
 * 前指针扫描，如果等于val，且前后指针数字不相等，则前指针位置和后指针位置交换
 */
let nums = [0,1,2,2,3,0,4,2,8,9], val = 2
let removeElement = (nums, val) => {
    //前指针
    let i=0;
    //后指针
    let j=nums.length;

    while(i !== j){
        if(nums[i] === val){
            if(nums[i] === nums[j-1]){
                j--;
            }else{
                nums[i] = nums[j-1];
                nums[j-1] = val;
                i++;
                j--;
            }
        }else{
            i++;
        }
    }
    return nums;
};

/**
 * 解法二
 * 双指针法（快慢指针）
 * 快慢指针从同一位置同时出发，当快慢指针遇到val时，慢指针会停下，快指针继续向前寻找
 * 如果快指针向前寻找，且不等于val时，快指针位置元素与慢指针位置元素互换
 */
let _removeElement = (nums, val) => {
    //定义慢指针
    let i=0;
    //定义快指针
    for(let j=0; j<nums.length; j++){
        if(nums[i] !== val){
            i++;
        }else{
            if(nums[j] !== val){
                nums[i] = nums[j];
                nums[j] = val;
                i++;
            }
        }
    }

    return i;
}

console.log(_removeElement(nums, val));
