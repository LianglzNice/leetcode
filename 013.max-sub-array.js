/*let arr = [
    [7],
    [3, 8],
    [8, 1, 0],
    [2, 4 ,7, 4],
    [4, 5, 2, 6, 5],
    [3, 2, 7, 8, 9, 2],
    [2, 3, 7, 2, 1, 0, 8]
];

let n = arr.length-2;
let list = arr[arr.length-1];
let path = []; 

let maxValue = () => {
    //行数
    for(let i=n; i>=0; i--){
        //列数
        for(let j=0; j<arr[i].length; j++){
            list[j] = arr[i][j] + (list[j] >= list[j+1] ? list[j] : list[j+1]);
        }

        path.unshift(bestPath(i, list));
    }

    console.log(list[0]);
    console.log(path);
};
//双指针
let bestPath = (times, list) => {
    let j=0;
    for(let i=0; i<list.length; i++){
        if(list[i] > list[j]){
            j = i;
        }
    }
    return [times, j];
};

maxValue();*/
/**
 * 最大子序和
 * @param {number[]} nums
 * @return {number}
 * 解法一
 * 动态规划
 */
let nums = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = nums => {
    let list = [];
    list.push(nums[0]);

    for(let i=1; i<nums.length; i++){
        if(list[i-1] > 0){
            let sum = list[i-1] + nums[i];
            list.push(sum);
        }else{
            list.push(nums[i]);
        }
    }

    let j=0;
    for(let i=0; i<list.length; i++){
        if(list[i] > list[j]){
            j=i;
        }
    }
    return list[j];
};
console.log(maxSubArray(nums));


/**
 * 最大子序和
 * @param {number[]} nums
 * @return {number}
 * 解法二
 * 贪心算法
 */