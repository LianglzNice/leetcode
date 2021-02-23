/**
 * 有效的括号
 * 思路：逐个字符遍历，只要匹配到右侧符号，则必定之前出现过左侧符号才对
 * 借助栈，使用Map()对象，构建一个哈希表
 * 右侧符号为键，左侧符号为值
 * 然后将比对过的符号，匹配成对的符号删除，再比对余下的符号
 */
let s = "([}}])";
let map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
]);
let isValid = function(s) {
    let arr = s.split('');
    //空字符串和奇数直接false
    if(!arr.length || arr.length % 2 === 1){
        return false;
    }
    let list = [];
    //注意：foreach使用return和break都无法跳出循环，需要搭配try catch 和 throw抛出错误
    try{
        arr.forEach(item => {
            //判断是否匹配到了右侧符号
            if(map.has(item)){
                //list中最后一个符号是不是与之匹配的左侧符号
                //匹配到了右侧符号，但是list.length为零，说明右侧符号多于左侧符号，直接false
                if(list[list.length-1] !== map.get(item) || list.length === 0){
                    throw '不是有效括号'
                }
                list.pop();
            }else{
                list.push(item);
            }
            //console.log(list);
        });
    }catch{
        return false
    }
    
    return !list.length;
};
console.log(isValid(s));