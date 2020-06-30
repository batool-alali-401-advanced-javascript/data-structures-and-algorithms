'use strict';

const quickSort = require('./quick-sort.js');

describe('Testing quickSort function', () => {
  test('should sort an array given in reverse-sorted order', () => {
    const array = [20, 18, 12, 8, 5, -2];
    quickSort(array, 0, 5);
    expect(array).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('should sort an array given with few uniques', () => {
    const array = [5, 12, 7, 5, 5, 7];
    quickSort(array, 0, 5);
    expect(array).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('should sort an array given in nearly-sorted order', () => {
    const array = [2, 3, 5, 7, 13, 11];
    quickSort(array, 0, 5);
    expect(array).toEqual([2, 3, 5, 7, 11, 13]);
  });
});