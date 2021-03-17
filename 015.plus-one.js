/**
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,6,6,2,8];
let plusOne = digits => {
    let sum = 0;
    let l = digits.length;
    for(let i=0; i<l; i++){
        sum += digits[i] * Math.pow(10, l-i-1);
    }
    sum ++;

    let list = [];
    let num = 10;
    while(sum > 0){
        list.unshift(sum % 10)
        sum = parseInt(sum / 10);
    }
    return list;
};
console.log(plusOne(digits));