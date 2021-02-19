/**
 * 解法一
 * 纵向扫描法
 * 取第一个字符串为基础
 * 逐渐累加长度，与后面的字符串进行同长度对比
 * 如果遇到不同的，则返回上一次比较的字符串
 */
let strs = ["flower","flow","flight","floa","flright","flght"];
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
 */
let longestCommonPrefix = (strs) => {
    
}


