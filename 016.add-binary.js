/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let a = "1010", b = "1011";
let addBinary = function(a, b) {
    let sum;
    let len = a.length < b.length ? a.length : b.length
    for(let i=len-1; i>0; i--){
        sum = parseInt(a[i]) + parseInt(b[i]);
    }
};

addBinary(a,b);