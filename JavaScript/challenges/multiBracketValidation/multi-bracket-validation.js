'use inputict';

const multiBracketValidation = (input) => {
  const testArray = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      testArray.push(input[i]);
    }
    if ((input[i] === ')' && testArray[testArray.length - 1] === '(') 
    || (input[i] === '}' && testArray[testArray.length - 1] === '{')
    || (input[i] === ']' && testArray[testArray.length - 1] === '[')) {
      testArray.pop();
    } else if ((input[i] === ')' && testArray[testArray.length - 1] !== '(') 
    || (input[i] === '}' && testArray[testArray.length - 1] !== '{')
    || (input[i] === ']' && testArray[testArray.length - 1] !== '[')) {
      return false;
    }
  }
  if (testArray.length === 0) return true;
  return false;
};

module.exports = multiBracketValidation;
