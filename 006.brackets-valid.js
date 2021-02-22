let obj = {"(":1, ")":1, "[":2, "]":2, "{":3, "}":3};
let str = '([]{}){}';

let isValid = str => {
    if(str.trim() && str.length % 2 != 0){
        return false;
    }
    let arr = str.split('');
    let arrs = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length-i; j++){
            
        }
    }
}
isValid(str);
