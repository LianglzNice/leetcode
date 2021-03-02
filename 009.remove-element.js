/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 解法一
 * 双指针法
 */
let nums = [0,1,2,2,4,5], val = 2
let removeElement = (nums, val) => {
    //前指针
    let i = 0;
    //后指针
    let j = nums.length;

    while(i != j){
        if(nums[i] === val){
            if(nums[i] !== nums[j-1]){
                nums[i] = nums[j-1];
                //直接释放交换后的值
                nums[j-1] = null;
                i++;
                j--;
            }else{
                j--;
            }
        }else{
            i++;
        }
    }
    return i
};
console.log(removeElement(nums, val));