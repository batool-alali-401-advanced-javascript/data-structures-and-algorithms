'use strict';

const insertionSort = require('./insertion-sort.js');

describe('Testing insertionSort function', () => {
  test('should sort an array given in worst case', () => {
    const sorted = insertionSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  test('should sort an array given with average case', () => {
    const sorted = insertionSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  test('should sort an array given in nearly-sorted case', () => {
    const sorted = insertionSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});