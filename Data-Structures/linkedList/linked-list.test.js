const lL = require('./linked-List.js');

describe('Node Module', () => {
  it('constructor()', () => {
    const value = 'Some value';
    const node = new lL.Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});

describe('linkList Module', () => {
  const list = new lL.LinkedList();
  const init = 'head';
  const second = 10;
  it('Head must be null when it is empty', () => {
    expect(list.head).toBeNull();
  });
  it('should insert into the linked list', () => {

    expect(list.insert(init)).toEqual({ head:  { value: 'head', next: null } });
  });
  it('The head property will properly point to the first node in the linked list', () => {
    expect(list.head.value).toEqual(init);
  });
  it('Can properly insert multiple nodes into the linked list', () => {
    expect(list.insert(second)).toEqual({ head:  { value: 'head', next: { value: 10, next: null } } });
    expect(list.head.value).toEqual(init);
    expect(list.head.next.value).toEqual(second);
  });
  
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(list.includes(100)).toBeFalsy();
  });
  it('return all the values that exist in the linked list', () => {
    expect(list.toString()).toEqual(`{ ${init} } -> { ${second} } -> null`);
  });
});

