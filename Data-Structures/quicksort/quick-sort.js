'use strict';

const quickSort = (arr, left, right) => {
  if (left < right) {
    const position  = partition(arr, left, right);

    quickSort(arr, left, position  - 1);
    quickSort(arr, position  + 1, right);
  }
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }

  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  const temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

module.exports = quickSort;