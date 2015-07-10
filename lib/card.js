var Card = function(rank, suit) {
  this._rank = rank;
  this._suit = suit;
};

Card.prototype = {

  rank: function() {
    return this._rank;
  },

  suit: function() {
    return this._suit;
  },

  format: function() {
    return [this._rank.toString(), this._suit.toString()].join('-');
  }
};

module.exports = Card;
