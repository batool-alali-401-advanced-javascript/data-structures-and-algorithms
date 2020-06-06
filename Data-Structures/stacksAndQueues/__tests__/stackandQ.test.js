'use strict';

const stacksAndQueues = require('../stacks-and-queues.js');

describe('stacksAndQueues Module', () => {

  describe('Stacks Module test', () => {

    it('Can  push onto a stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(0);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.peak()).toEqual(3);
    });
    it('Can  pop from the stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(5);
      stack.push(6);
      expect(stack.pop()).toEqual(6);
    });
    it('Can test if the stack is empty', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      stack.pop();
      stack.pop();
      expect(stack.isEmpty()).toBeTruthy();
    });
    it('Can successfully peek the next item on the stack', () => {
      const stack = new stacksAndQueues.Stack();
      stack.push(7);
      stack.push(4);
      stack.push(3);
      expect(stack.peak()).toEqual(3);
    });
    it('Can successfully instantiate an empty stack', () => {
      const stack = new stacksAndQueues.Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
  });
  
  describe('Queue Module test', () => {
    it('Can enqueue into a queue', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(9);
      queue.enqueue(4);
      expect(queue.peak()).toEqual(9);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      expect(queue.dequeue()).toEqual(7);
    });
    it('Can successfully peek into a queue, seeing the expected value', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      expect(queue.peak()).toEqual(7);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
      const queue = new stacksAndQueues.Queue();
      queue.enqueue(7);
      queue.enqueue(4);
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toBeTruthy();
    });
    it('Calling dequeue or peek on empty queue raises exception', () => {
      const queue = new stacksAndQueues.Queue();
      expect(queue.dequeue()).toEqual(null);
      expect(queue.peak()).toEqual(null);
    });
  });
});