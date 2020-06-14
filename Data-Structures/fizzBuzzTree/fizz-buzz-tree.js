'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }
}




function fizzBuzz(rootNode) {
  if (!rootNode) return undefined;

  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizzBuzz';
  } else if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  } else if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  }else {
    rootNode.value = `${rootNode.value}`;
  }
  fizzBuzz(rootNode.left);
  fizzBuzz(rootNode.right);
  return undefined;
}

module.exports = {BinaryTree,Node,fizzBuzz};