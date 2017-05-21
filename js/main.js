//create array for cards in deck
var cards = ['queen', 'queen', 'king', 'king'];
//create empty array for selected cards
var cardsInPlay = [];

//create variable for first selected card
var cardOne = cards[0];
//add selected card to cardsInPlay array
cardsInPlay.push(cardOne);

//for testing purposes
console.log('User flipped queen');

var cardTwo = cardsInPlay[2];

cardsInPlay.push(cardTwo);

console.log('User flipped king');

////checks that 2 cards have been selected
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('You found a match!');
    } else {
        alert('Sorry, try again!');
    }
}
