class node {
  constructor(val, right, left) {
    this.val = val;
    this.right = right || null;
    this.left = left || null;
  }
}
  

const treeIntersection = (rootA, rootB) => {
  let matches = [];
  let traversal = [];
  let current = rootA;
  while (current) {
    
    
    if (!matches.includes(current.val) && existsInTree(current.val, rootB))
      matches.push(current.val);
    if (current.left) traversal.push(current.left);
    if (current.right) traversal.push(current.right);
    current = traversal.shift();
  }
  return matches;
};
  

const existsInTree = (val, root) => {
  let found = false;
  if (val === root.val) {
    found = true;
  }
  if (root.left && found === false) {
    found = existsInTree(val, root.left);
  }
  if (root.right && found === false) {
    found = existsInTree(val, root.right);
  }
  return found;
};
  
module.exports = { node, existsInTree, treeIntersection };