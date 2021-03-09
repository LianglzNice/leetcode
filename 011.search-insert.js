/**
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1,3,5,6], target = 7;
let searchInsert = (nums, target) => {
    if(nums.length === 0) return 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target) return i;
        if(nums[i] > target){
            if(i === 0) return 0;
            return i;
        }
    }
    return nums.length;
};

/**
 * 二分法
 * 如果是一个问题，待查找的数是整数，且知道范围，大概就可以使用二分查找算法。
 * 定义左右指针l、r，分别指向数组的首尾。mid为中间
 * 如果等于 nums[mid] 则返回mid
 * 如果< nums[mid] 则右移 l = mid + 1；
 * 如果> nums[mid] 则左移 r = mid - 1;
 */
let _searchInsert = (nums, target) => {
    let l = 0, r = nums.length-1;

    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) l = ++ mid;
        if(nums[mid] > target) r = -- mid;
    }
    return l;
}
console.log(_searchInsert(nums, target));