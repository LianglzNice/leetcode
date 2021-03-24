/**
 * 1710.卡车上的最大单元数
 * @param {number[][]} boxTypes 箱子的数量、每个箱子可以装载的单元数量
 * @param {number} truckSize
 * @return {number}
 */
let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10

let maximumUnits = (boxTypes, truckSize) => {
    let sum = 0;
    //并不用全部排序，只需排序需要使用的元素即可，根据承载量计算
    for(let i=0; i<boxTypes.length; i++){
        for(let j=i+1; j<boxTypes.length; j++){
            if(boxTypes[j][1] > boxTypes[i][1]){
                let item = boxTypes[i];
                boxTypes[i] = boxTypes[j];
                boxTypes[j] = item;
            }
        }
        
        if(truckSize > boxTypes[i][0]){
            sum += boxTypes[i][0] * boxTypes[i][1];
            truckSize -= boxTypes[i][0];
        }else{
            sum += truckSize * boxTypes[i][1];
            break;
        }
    }

    return sum;
};

maximumUnits(boxTypes, truckSize);