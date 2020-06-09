const validation = require('../multi-bracket-validation.js');

describe('Multi Bracket Validation', () => {
  test('check valid input', () => {
    expect(validation('({[]})')).toBeTruthy();
    expect(validation('({[][]})')).toEqual(true);
    expect(validation('({[()()]})')).toEqual(true);
  });
  
  test('check invalid input', () => {
    expect(validation('({[})')).toEqual(false);
    expect(validation('{[}]')).toEqual(false);
    expect(validation('({[)')).toEqual(false);
  });
});