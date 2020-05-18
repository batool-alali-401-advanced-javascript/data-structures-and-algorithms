'use strict';
const insertShiftArray = require('../array-shift.js');

describe('Shift Array', () => {
  test('It should return an array with the new value added at the middle index.', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });
  test('It should return an array with the new value added at the middle index.', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
  });
});