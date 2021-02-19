/**
 * 解法一
 * 转换为字符串，然后反转字符串，再进行对比
 */
// var isPalindrome = function(x) {
//     let nums = parseInt(x.toString().split('').reverse().join(''));
//     if(nums === x){
//         return true;
//     }else{
//         return false;
//     }
// };
// console.log(isPalindrome(123456));



/**
 * 解法二
 * 负数不是回文数
 * 结尾是零的数，不是回文数，注意零是回文数
 * 利用回文数特点，将后一半的数，进行反转，和前一半比较即可
 * 利用 res/10 来对位数为奇的数进行判断
 */
let isPalindrome = num => {
    if(num < 0 || (num > 0 && num % 10 == 0)) {
        return false;
    }
    let res = 0;
    while(num > 0){
        let n = num % 10;
        num = parseInt(num / 10);
        res = res * 10 + n;

        if(res >= num){
            break;
        }
    }
    if(res == num || parseInt(res / 10) == num){
        return true;
    }else{
        return false;
    }
    
}
//console.log(isPalindrome(123456));

/**
 * 两个三位数的乘积是回文数
 * 求这两个三位数最大为多少
 */
let nums = [];
for(let i=100; i<999; i++){
    for(let j=i; j<999; j++){
        if(isPalindrome(i*j)){
            nums = [i, j, i*j];
        };
    }
}
console.log(nums);