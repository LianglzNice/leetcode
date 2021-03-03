/**
 * 实现indexOf()
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let haystack = "hello", needle = "ll";
let strStr = (haystack, needle) => {
    if(!needle) return 0;
    let arr = haystack.split(needle);
    if(arr.length > 1)  return arr[0].length;
    return -1;
};
console.log(strStr(haystack, needle));