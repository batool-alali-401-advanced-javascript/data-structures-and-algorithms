const  Queue = require('../queue-with-stacks.js');


let numbers= new  Queue.PseudoQueue();


describe('PseudoQueue', () => {

 
  describe('enqueue method', () => {

    it('Can  enqueue onto a PseudoQueue', () => {
      numbers.enqueue(1);
      numbers.enqueue(2);
      numbers.enqueue(3);
      numbers.enqueue(4);
      expect(numbers.stack1).toEqual([1,2,3,4]);
    });
  });

  describe('dequeue method', () => {

    it('Can  dequeue off the stack', () => {
      numbers.enqueue(1);
      numbers.enqueue(2);
      numbers.enqueue(3);
      numbers.enqueue(4);
      expect(numbers.dequeue()).toEqual(1);
    });
  });
});