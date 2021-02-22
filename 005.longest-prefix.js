/**
 * 解法一
 * 纵向扫描法
 * 取第一个字符串为基础
 * 逐渐累加长度，与后面的字符串进行同长度对比
 * 如果遇到不同的，则返回上一次比较的字符串
 */
let strs = ["flowerd","flow","floight","floa","flright","floght"];
let longestCommonPrefix = (strs) => {
    let res = "";
    if(strs.length === 0){
        return res;
    }
    
    for(let i=0; i<strs[0].length; i++){
        let word = strs[0].substring(0, i+1);

        for(let j=1; j<strs.length; j++){
            if(word !== strs[j].substring(0, i+1)){
                return word.substring(0, i);
            }
        }
        res = word;
    }
    return res;
};

console.log(longestCommonPrefix(strs));

/**
 * 解法二
 * 二分查找法
 * 就是讲一组字符串中的第一个字符串取出
 * 然后将其分为均等两部分，先将前部分比对出结果。
 * 如果前半部分为公共前缀，则继续追加后半部分的字符。
 * 如果前半部分不是公共前缀，则将前半部分的字符再进行截取。
 */
let longestCommonPrefixs = (strs) => {
    let res = "";
    if(strs.length === 0){
        return res;
    }

    let word = strs[0];
    if(word.length > 1){
        let w1 = word.substring(0, word.length/2);
        let w2 = word.substring(word.length/2, word.length);
        if(frontWord(w1)){
            res = backDeal(w1, w2);
        }else{
            res = frontDeal(w1);
        }
    }else{
        frontWord(word) ? res = word : res = "";
    }
    return res;
}

//判断前一半字符串是否为公共前缀
let frontWord = w1 => {
    for(let i=1; i<strs.length; i++){
        if(strs[i].indexOf(w1) < 0){
            return false;
        }
    }
    return true;
}

let count = 1;
//如果前半部分为公共前缀，则继续判断
let backDeal = (w1, w2) => {
    if(frontWord(w1)){
        w1 += w2.substring(0, count);
        count ++;
        //在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值
        return backDeal(w1, w2);
    }
    return w1.substring(0, w1.length-1);
}

//如果前半部分不是公共前缀，则继续递减
let frontDeal = w1 => {
    if(!frontWord(w1)){
        w1 = w1.substring(0, w1.length-1);
        //在递归函数内部没有对递归函数进行return，否则外层函数无法接收到返回值
        return frontDeal(w1);
    }
    return w1;
}

console.log(longestCommonPrefixs(strs))


