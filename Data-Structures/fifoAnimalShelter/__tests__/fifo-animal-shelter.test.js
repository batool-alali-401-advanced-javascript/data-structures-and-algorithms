const Animal = require('../fifo-animal-shelter.js');

describe('Animal-shelter Module', ()=>{
  it('add an animal by using enqueue() method ', ()=>{
    let animal = new Animal();
    animal.enqueue({'type':'cat'});
    animal.enqueue({'type':'dog'});
    expect(animal.cats).toEqual([{'type':'cat'}]);
    expect(animal.dogs).toEqual([{'type':'dog'}]);

  });
  
  it('return an animal by using dequeue() method', ()=>{
    let animal = new Animal();
    animal.enqueue({'type':'cat'});
    animal.enqueue({'type':'dog'});
    animal.enqueue({'type':'bird'});
    expect(animal.cats.length).toEqual(1);
    expect(typeof(animal.dequeue('dog'))).toEqual('object');
    expect(animal.dequeue('bird')).toBeNull();
  });
});