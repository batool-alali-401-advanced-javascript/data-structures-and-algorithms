const lL = require('../linked-list.js');


describe('linkList Module', () => {
  const list = new lL.LinkedList();
  const init = 'head';
  const second = 10;
  it('Head must be null when it is empty', () => {
    expect(list.head).toBeNull();
  });
  it('should insert into the linked list', () => {

    expect(list.append(init)).toEqual({ head:  { value: 'head', next: null } });
  });
  it('Can successfully add a node to the end of the linked list', () => {
    expect(list.append(second)).toEqual({ head:  { value: 'head', next: {value:10, next:null} } });
  });

  
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    expect(list.append(100)).toEqual({ head:  { value: 'head', next: {value:10, next:{value:100, next:null }} } });
    expect(list.append(200)).toEqual({ head:  { value: 'head', next: {value:10, next:{value:100, next:{value:200, next:null} }} } });
  });
  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    expect(list.insertBefore(100,'middle')).toEqual({head: {value:'head', next:{value:10, next:{value:'middle', next:{value:100, next:{value:200, next:null}}}}}});
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    expect(list.insertBefore('head','first')).toEqual({head: {value:'first',next:{value:'head', next:{value:10, next:{value:'middle', next:{value:100, next:{value:200, next:null}}}}}}});
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    expect(list.insertAfter(10,'middle2')).toEqual({head: {value:'first',next:{value:'head', next:{value:10, next:{value:'middle2',next:{value:'middle', next:{value:100, next:{value:200, next:null}}}}}}}});
  });
  it('Can successfully insert a node after the last node of the linked list ', () => {
    expect(list.insertAfter(200,'last')).toEqual({head: {value:'first',next:{value:'head', next:{value:10, next:{value:'middle2',next:{value:'middle', next:{value:100, next:{value:200, next:{value:'last', next:null}}}}}}}}});
  });
});

