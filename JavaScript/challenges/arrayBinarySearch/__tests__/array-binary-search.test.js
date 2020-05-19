'use strict';

const binarySearch = require('../array-binary-search.js');

describe('binarySearch()', () => {
  test('It should return the index of the array’s element that is equal to the search key', () => {
    expect(binarySearch([4,8,15,16,23,42],15)).toStrictEqual(2);
  });
  test('It should return -1', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});