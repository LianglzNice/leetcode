/**
 * 分析罗马数字表示方法
 * 定义sum代表总和
 * 从第一个字符开始
 * 如果当前字符 > 下一个字符 则直接 sum + 当前字符 如：II 1+1
 * 如果当前字符 < 下一个字符 则sum + （下一个字符 - 当前字符） 如：IV 5-1
 */

let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}

let romanNum = str => {
    let arr = str.split('');
    if(arr.length > 15 || arr.length < 1){
        throw '字符串长度不符合规范！';
    }
    
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 'I' && arr[i] !== 'V' && arr[i] !== 'X' && arr[i] !== 'L' && arr[i] !== 'C' && arr[i] !== 'D' && arr[i] !== 'M'){
            throw '字符串不符合规范！';
        }
        if(i < arr.length - 1){
            if(obj[arr[i]] >= obj[arr[i + 1]]){
                sum += obj[arr[i]];
            }else{
                sum += obj[arr[i + 1]] - obj[arr[i]];
                i++;
            }
        }else{
            sum += obj[arr[i]];
        }
    }

    return sum;
}
console.log(romanNum('MCMXCIV'));