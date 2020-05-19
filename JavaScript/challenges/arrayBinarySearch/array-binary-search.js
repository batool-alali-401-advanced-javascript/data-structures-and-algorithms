'use strict';

function binarySearch(sortedArray, searchKey){
  let index =-1;
  for(let i = 0; i<sortedArray.length; i++){
    if(sortedArray[i] == searchKey){
      index = i;
      break;
    }
  }
  return index;
}

console.log(binarySearch([4,8,15,16,23,42], 15));
console.log(binarySearch([11,22,33,44,55,66,77], 90));

module.exports = binarySearch;