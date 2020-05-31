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
  append(value){
    const node = new Node(value);
    if(!this.head ){
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    console.log(this.head);
    return this;
  }

  insertBefore(value, newVal){
    let found=false;
    let current = this.head;
    if (current.value== value){
      let newNode = new Node(newVal);
      newNode.next = this.head;
      this.head = newNode;
    
    }
    while (current.next != null && !found) {
      if (current.next.value == value) {
        let temp = new Node(newVal);
        temp.next = current.next;
        current.next = temp;
        found = true;
      } 
      else{
        current = current.next;
      }
    }
    return this;
  }

  insertAfter(value,newVal){
    let current = this.head;
    let found = false;
    if(current.value == value){
      this.append(newVal);
    }
    else{
      while(current && !found){
        if(current.value == value){
          let temp = new Node(newVal);
          temp.next = current.next;
          current.next = temp;
          found =  true;
        } 
        else{
          current = current.next;
        }
      }
    }
    return this;
  }
}
  
module.exports.Node = Node;
module.exports.LinkedList = LinkedList;