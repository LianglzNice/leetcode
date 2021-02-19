/**
 * 解法一
 * 利用javascript内置方法
 * 将int转换为string类型，然后再反转，判断范围
 */
/*
let reverse = function(x) {
    if(typeof x === 'number'){
        let num = 0;
        if(x >= 0){
            num = parseInt(x.toString().split('').reverse().join(''));
        }else{
            num = -parseInt(x.toString().split('').reverse().join(''));
        }
        if(Math.pow(-2, 31) < num && num < Math.pow(2, 31)-1){
            return num;
        }else{
            return 0;
    }else{
        return '传值类型错误'
    }
};

console.log(Math.pow(2, 31) - 1);
*/

/**
 * 解法二
 * 首先定义一个预期结果变量 let res = 0;
 * 然后求出余数 num % 10
 * 再有循环 num /= 10 并大于零
 * 再将 res = res * 10 + num % 10 即可得出反转后的结果
 */
let reverse = num => {
    let res = 0;
    while(num !== 0){
        let pop = num % 10;
        num = parseInt(num / 10);
        if(res < Math.pow(-2, 31) || res > Math.pow(2, 31)-1){
           return 0;
        }
        res = res*10 + pop;
    }
    return res;
}

console.log(reverse(2147483647));