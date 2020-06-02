const lL = require('../linked-list.js');


describe('linkList Module', () => {
  const ll1= new lL.LinkedList();
  ll1.append(1);
  ll1.append(3);
  ll1.append(2);
  
  const ll2= new lL.LinkedList();
  ll2.append(5);
  ll2.append(9);
  ll2.append(4);  
  const merged = new lL.LinkedList();


  const ll3= new lL.LinkedList();
  ll3.append(1);
  ll3.append(3);
  
  const ll4= new lL.LinkedList();
  ll4.append(5);
  ll4.append(9);
  ll4.append(4);  
  const merged1 = new lL.LinkedList();

  const ll5= new lL.LinkedList();
  ll5.append(1);
  ll5.append(3);
  ll5.append(2);
  
  const ll6= new lL.LinkedList();
  ll6.append(5);
  ll6.append(9);
  const merged2 = new lL.LinkedList();
 
  it('Can successfully merge two linked lists, the first is shorter', () => {
    expect(merged1.mergeLists(ll3,ll4)).toEqual({head: {value:1, next:{value:5, next:{value:3, next:   {value:9, next:{value:4, next:null}}}}}});
  });
  
  it('Can successfully merge two equal size linked lists', () => {
    expect(merged.mergeLists(ll1,ll2)).toEqual({head: {value:1,next:{value:5, next:{value:3, next:{value:9, next:{value:2, next:{value:4, next:null}}}}}}});
  });
  it('Can successfully merge two linked lists, the second is shorter', () => {
    expect(merged2.mergeLists(ll5,ll6)).toEqual({head: {value:1, next:{value:5, next:{value:3, next:   {value:9, next:{value:2, next:null}}}}}});
  });
});

