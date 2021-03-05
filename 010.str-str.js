/**
 * 实现indexOf()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * 解法一
 * 利用 split()
 */
let haystack = "hello", needle = "ll";
let strStr = (haystack, needle) => {
    if(!needle) return 0;
    let arr = haystack.split(needle);
    if(arr.length > 1)  return arr[0].length;
    return -1;
};


/**
 * 解法二
 * 利用 substring()
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
 * 
 */
let _strStr = (haystack, needle) => {
    if(!needle) return 0;
    let n = haystack.length;
    let l = needle.length;
    
    let i=0;
    while(i < n-l+1){
        if(haystack.charAt(i) === needle[0]){
            
        }
    }
}
console.log(_strStr(haystack, needle));