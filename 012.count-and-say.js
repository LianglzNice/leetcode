/**
 * 外观数列
 * @param {number} n
 * @return {string}
 * 双指针解法
 */
let countAndSay = n => {
    return dealData(n, "1");
};

let dealData = (n, data) => {
    if(n < 2) return data;

    let sum = "";
    let j = 0;
    for(let i=0; i<data.length; i++){

        if(data[i] !== data[j]){
            sum += (i-j) + data[j];
            j=i;
        }

        if(i === data.length - 1) sum += (data.length-j) + data[j];
    }

    return dealData(--n, sum);
};

console.log(countAndSay(30));