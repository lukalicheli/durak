let suits = ["♥", "♣", "♦", "♤"];
let ranks = ["6", "7", "8", "9", "T", "J", "Q", "K", "A"];

export default class Deck {
  constructor(cards = createDeck()) {
    this.cards = cards;
  }

  get numberofCards() {
    return this.cards.length;
  }

  shuffleDeck() {
    for (let i = this.numberofCards - 1; 1 > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
function createDeck() {
  return suits.flatMap((suit) => {
    return ranks.map((value) => {
      return new Card(suit, value);
    });
  });
}

let newDeck = createDeck();

let newHand1 = newDeck.splice(0, 6);

let newHand2 = newDeck.splice(0, 6);

