'use strict';

function insertShiftArray(arr,value){
  let middle=Math.ceil(arr.length/2);
  let shifted=[];
  shifted[middle]=value;
  for (let i=0; i<middle; i++){
    shifted[i]=arr[i];
  }
  for (let i=arr.length; i> middle; i--){
    shifted[i]=arr[i-1];
  }
  return shifted;
}


console.log(insertShiftArray([2,4,6,8], 5));
console.log(insertShiftArray([4,8,15,23,42], 16));

module.exports = insertShiftArray;
