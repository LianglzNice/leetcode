/**
 * 最后一个单词的长度  
 * @param {string} s
 * @return {number}
 */
let s = "a "
let lengthOfLastWord = (s) => {
    s = s.trim();
    let i = s.length - 1
    while(i >= 0){
        if(s[i] == " ") return s.length - 1 - i;
        i--;
    }
    return s.length;
};
console.log(lengthOfLastWord(s));