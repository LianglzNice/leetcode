/**
 * 解法一 暴力枚举法
 * 从第一个开始遍历依次相加
 * 比较浪费资源
 */
var twoSum = function(nums, target) {
    let arr = [];
    if(nums.length < 1){
        return;
    }
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if((nums[i] + nums[j]) === target){
                return [i, j];
            };
        }
    }
    return [];
};
console.log(twoSum([2,7,11,15], 9));


/**
 * 解法二 indexOf查找原数组法
 * 思路：得到第一个num1后，用target减去num1，就是num2,可以利用indexOf()去查找
 */
var twoSum = function(nums, target) {
    if(nums.length < 1){
        return;
    }
    for(let i=0; i<nums.length; i++){
        if((nums.indexOf(target - nums[i]) > -1) && (i !== nums.indexOf(target - nums[i]))){
            return [i, nums.indexOf(target - nums[i])];
        }
    }
    return [];
};
console.log(twoSum([3,2,4], 6));


/**
 * 解法三 哈希表法
 * 思路：创建一个map表，然后取循环遍历数组中的元素(target减去num1，就是num2),再与map中的元素比对，如果有就返回，没有就加入map表中
 */
console.time('sum');

var twoSum = function(nums, target) {
    if(nums.length < 1){
        return;
    }
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
};
console.log(twoSum([3,2,4], 6));

console.timeEnd('sum');

