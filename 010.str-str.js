/**
 * 实现indexOf()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 解法一
 * 利用 split()
 */
let haystack = "hellosoflwfj", needle = "lwfj";
let strStr = (haystack, needle) => {
    if(!needle) return 0;
    let arr = haystack.split(needle);
    if(arr.length > 1)  return arr[0].length;
    return -1;
};


/**
 * 解法二
 * 利用 substring() 切割父字符串, substring(i, i+l) 与子字符串进行比对
 */
let strStr = (haystack, needle) => {
    if(!needle) return 0;
    let n = haystack.length;
    let l = needle.length;
    for(let i=0; i<n-l+1; i++){
        if(haystack.substring(i, i+l) === needle){
            return i;
        }
    }
    return -1;
}

/**
 * 解法三
 * 逐个字符串进行比较
 * 如果首字母相同
 * 开始逐个字符进行比较
 */
let strStr = (haystack, needle) => {
    if(!needle) return 0;
    let n = haystack.length;
    let l = needle.length;
    
    let i=0;
    while(i < n-l+1){
        if(haystack.charAt(i) !== needle[0]){
            i++;
            continue;
        }
        let j=1;
        while(j <= l){
            if(haystack.charAt(i+j) !== needle[j]) break;
            j++;
        }
        i++;
        if(j === l) return --i;
    }
    return -1;
}
console.log(strStr(haystack, needle));