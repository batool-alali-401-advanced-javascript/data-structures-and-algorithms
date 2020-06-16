const Node = require('./tree.js').Node;
const BinaryTree = require('./tree.js').BinaryTree;

describe(' Binary Tree Modular , find-maximum-value' , () =>{
  let tree = [];
  let one = new Node(100);
  let two = new Node(15);
  let three = new Node(3);
  let four = new Node(17);
  
  one.left = three;
  one.right = two;
  two.left = four;
  
  tree = new BinaryTree(one);
  
  
  
  it( 'findMaximumValue()' , ()=>{
    expect(tree.findMaximumValue(one)).toEqual(100);

  });
  
});