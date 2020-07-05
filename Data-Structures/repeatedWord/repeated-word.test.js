  
const  repeatedWord  = require('./repeated-word').repeatedWord;

describe('stringToWordArray Tests', () => {
  
  test('should find the FIRST repeated word', () => {
    const str = 'It was good, that was good';
    const dup = repeatedWord(str);
    expect(dup).toBe('was');
  });
  test('should find repeated word', () => {
    const str = 'apple was, Was';
    const dup = repeatedWord(str);
    expect(dup).toBe('was');
  });
});


