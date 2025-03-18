//T: You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//S:
const defineSuit = card => {
    const cards = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades',
    }

    const cardSuit = card.slice(card.length - 1, card.length);
    return cards[cardSuit]
}