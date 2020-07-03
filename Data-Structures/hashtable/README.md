# Hashtables
This is an implementation of the hashtable data structure in JavaScript.

## Challenge
Implement a Hashtable with the methods add, get, contains, and hash.

Write tests to prove the following functionality:

Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value

## Approach & Efficiency
- add()
time O (1) space O (1) time is a big O(1),  

- get()
time O (1) space O (1) time is a big O(1),  

- contains()
time O (1) space O (1) time is a big O(1),  

- hash()
time O (1) space O (1) time is a big O(1),  

## API
- hash() : method takes a key as string (arg) and return a hashed key
- add () :  method to hash the key then add it to array as a node in linked list
- get() : get an item from array of the hashtable
- contains() : return true if the key exist and false if not
