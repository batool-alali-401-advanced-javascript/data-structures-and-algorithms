'use strict';
const Node= require('./tree.js').Node;
const BST = require('./tree.js').BinaryTree;

describe('Breadth first Traversal Tree Module', ()=>{
  
 
  
  it('sssss', ()=>{
    let tree = [];
    let one = new Node(10);
    let two = new Node(20);
    let three = new Node(30);
    let four = new Node(40);

    one.left = three;
    one.right = two;
    two.left = four;

    tree = new BST(one);
    expect(tree.breadthFirst()).toEqual([]);
  });
  
});