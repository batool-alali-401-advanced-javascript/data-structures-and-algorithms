'use strict';

const mergeSort = require('./merge-sort.js');

describe('Testing mergeSort function', () => {
  it('should sort a reverse-sorted order array', () => {
    const sorted = mergeSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('should sort a few uniques array', () => {
    const sorted = mergeSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('should sort an array given in nearly-sorted order', () => {
    const sorted = mergeSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});