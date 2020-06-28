class Node {
  constructor(value, right = null, left = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
  
class BinaryTree {
  constructor(root = null){
    this.root = root;
  }
  
  preOrder(){
    let results = [];
    let _traversal = (node)=>{
      results.push(node.value);
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

  inOrder(){
    let results = [];
    let _traversal = (node) => {
      if(node.left) _traversal(node.left);
      results.push(node.value);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return results;
  }

  postOrder(){
    let results = [];
    let _traversal = (node) => {
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
      results.push(node.value);
    };
    _traversal(this.root);
    return results;
  }
  breadthFirst(){

    let arr = [];
    let temp=false ;
    if(this.root !== null){
      temp=this.root;
      while(!temp){
        let current = temp;
        arr.push(current.value);
        if(current.left !== null){
          temp=current.left;
        }
        if(current.right !== null){
          temp=current.right;
        }
      }
      return arr;
    }
  }
  findMaximumValue(root){
    if(root === null){
      return null;
    }

    let node = root.value;
    let left = this.findMaximumValue(root.left);
    let right = this.findMaximumValue(root.right);

    if(left > node ){
      node = left;
    }
    if(right > node ){
      node = right;
    }
    return node;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  
  
  add(value) {
  
    const node = this.root;
    if (node === null) {
      this.root = new Node(value);
      return;
    } 
    else {
      const bst = function (node) {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node !== null) {
            return bst(node.left);
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node !== null) {
            return bst(node.right);
          }
        } else {
          return null;
        }
      }; 
      bst(node);
    }
  
  } 
  
  
  contains(value) {
  
    let curNode = this.root;
    while (curNode) {
      if (value === curNode.value) {
        return true;
      }
      if (value < curNode.value) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    return false;
  
  } 
}  
  
module.exports = {BinaryTree,Node,BST};