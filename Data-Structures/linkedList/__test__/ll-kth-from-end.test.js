const lL = require('../linked-list.js');

describe('linkList Module', () => {
  const list = new lL.LinkedList();
  it('return the only node value if size=1', () => {
    list.append(1);
    expect(list.kthFromEnd(0)).toEqual(1);
  });
  list.append(1);
  list.append(5);
  list.append(6);
  list.append(7);
  it('return the first value from the end when k=0', () => {
    expect(list.kthFromEnd(0)).toEqual(1);
  });

  it('return the second value from the end when k=1', () => {
    expect(list.kthFromEnd(1)).toEqual(7);
  });

  it('return (Exception) if k > link list size', () => {
    expect(list.kthFromEnd(5)).toEqual('Exception');
  });
  it('return (Exception) if k > 0', () => {
    expect(list.kthFromEnd(-5)).toEqual('Exception');
  });
  it('return Exception if k = size', () => {
    expect(list.kthFromEnd(5)).toEqual('Exception');
  });
});