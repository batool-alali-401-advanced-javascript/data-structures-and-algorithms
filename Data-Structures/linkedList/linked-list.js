class Node {
  constructor(data){
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  insert(value=''){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(value){
    let current = this.head;
    while(current){
      if(current.data === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString(){
    let current = this.head;
    let allValuesInLinkList = `{ ${current.value} }`;
    while(current.next){
      current = current.next;
      allValuesInLinkList += ` -> { ${current.value} }`;
    }
    return allValuesInLinkList + ' -> null';
  }
}
  
module.exports.Node = Node;
module.exports.LinkedList = LinkedList;