'use strict';

const Hashtable = require('./hashtable');

const hashtable = new Hashtable();

describe('testing out hashtable', () => {
  test('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashtable.add(15, 19);
    let contained = hashtable.contains(15);
    expect(contained).toBeTruthy();
  });

  test('Retrieving based on a key returns the value stored', () => {
    let contained = hashtable.contains(15);
    expect(contained).toBeTruthy();
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    let notThere = hashtable.get(30);
    expect(notThere).toBeNull();
  });



  test('Successfully hash a key ', () => {
    const high = hashtable.list.length;
    const low = 0;
    const hashed = hashtable.hash(16);
    expect(hashed >= low && hashed < high).toBeTruthy();
  });
});