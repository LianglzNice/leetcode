/**
 * 加一
 * @param {number[]} digits
 * @return {number[]}
 */
let digits = [9];
let plusOne = digits => {
    return todolist(digits, digits.length-1);
};

let todolist = (digits, index) => {
    if(index === -1){
        digits.unshift(1);
        return digits;
    };
    digits[index] = digits[index] + 1;
    if(digits[index] === 10){
        digits[index] = 0;
        return todolist(digits, index-1);
    }
    return digits;
}

console.log(plusOne(digits));