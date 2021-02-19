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