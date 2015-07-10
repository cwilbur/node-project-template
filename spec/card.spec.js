var Card = require('../lib/card.js');

describe('a card', function() {

  it('stores a rank and a suit', function() {
    var c = new Card(5, 3);
    expect(c.rank()).toBe(5);
    expect(c.suit()).toBe(3);
  });

  it('formats the card in a sensible default way', function() {
    var c = new Card(5, 3);
    expect(c.format()).toBe('5-3');
  });

});
