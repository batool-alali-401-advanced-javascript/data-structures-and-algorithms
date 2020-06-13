const Node = require('./tree.js').Node;
const BST = require('./tree.js').BST;
const BinaryTree = require('./tree.js').BinaryTree;

describe(' BST', () => {


  const node1 = new Node(10);
  const node2 = new Node(20);
  const node3 = new Node(5);
  const node4 = new Node(40);
  const node5 = new Node(2);

  const tree = new BST();

  tree.add(node1.value);
  tree.add(node2.value);
  tree.add(node3.value);
  tree.add(node4.value);

  it('add()', () => {
    tree.add(node5.value);
    expect(node5.value).toEqual(2);
  }); 

  it('Contains()', () => {
    expect(tree.contains(node5)).toBeFalsy();
  }); 

});


describe(' Binary Tree ' , () =>{
  let tree = [];
  let one = new Node(10);
  let two = new Node(20);
  let three = new Node(30);
  let four = new Node(40);

  one.left = three;
  one.right = two;
  two.left = four;

  tree = new BinaryTree(one);

  it('PreOrder()' , ()=>{
    expect(tree.preOrder()).toEqual([10,30,20,40]);
  }); 
  it('InOrder()' , ()=>{
    expect(tree.inOrder()).toEqual([30,10,40,20]);
  }); 

  it('PostOrder()' , ()=>{
    expect(tree.postOrder()).toEqual([30,40,20,10]);
  }); 

}); 