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
  kthFromEnd(k){
    let temp = this.head;
    let count = 0; 
    while (temp != null) 
    { 
      count++; 
      temp = temp.next; 
    } 
    let size=count;
    if(k < 0 || k >= size){
      return('Exception');
    }

    let position = size - k;
    let ctr = 1;
    let current = this.head;
    while(ctr < position && current != null){
      current = current.next;
      ctr += 1;
    }

    return current.value;
  }
  mergeLists( head1,  head2){

    let current1 = head1.head;
    let current2 = head2.head;

    if(current1 == null){
      this.head = current2;
    }else if(current2 == null){
      this.head = current1;
    }else {
      let next1 = current1.next;
      let next2 = current2.next;
      if (next1 == null) {
        current1.next = current2;
        this.head =  current1;
      } else {

        while (next1 != null && next2 != null) {
          current1.next = current2;
          current2.next = next1;
          current1 = next1;
          current2 = next2;
          next1 = current1.next;
          next2 = current2.next;
        }

        if (next2 == null) {
          current1.next = current2;
          current2.next = next1;
        } else {

          current1.next = current2;
        }
        this.head = head1.head;
      }
    }
    return this;
  }
}


module.exports.Node = Node;
module.exports.LinkedList = LinkedList;