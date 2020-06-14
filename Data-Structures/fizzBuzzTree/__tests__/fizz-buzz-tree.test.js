'use strict';

const Node = require('../fizz-buzz-tree.js').Node;
const BinaryTree = require('../fizz-buzz-tree.js').BinaryTree;
const fizzBuzz = require('../fizz-buzz-tree.js').fizzBuzz;

describe('fizzbuzz binary tree', () => {
  test('should change any value that is divisable by 3 to fizz, 5 to buzz, and both to fizzBuzz', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const thirty = new Node(30);
    const tree = new BinaryTree(one);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    six.left = thirty;
    seven.left = eight;
    seven.right = nine;

    fizzBuzz(tree.root);

    expect(one.left.value).toEqual('2');
    expect(one.right.value).toEqual('fizz');
    expect(three.right.value).toEqual('buzz');
    expect(six.left.value).toEqual('fizzBuzz');
  });
});