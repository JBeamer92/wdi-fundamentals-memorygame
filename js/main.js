//create array for cards in deck
var cards = ['queen', 'queen', 'king', 'king'];
//create empty array for selected cards
var cardsInPlay = [];

var flipCard = function(cardId) {
    // logs selected card
    console.log("User flipped " + cards[cardId]);
    // adds selected card to cardsInPlay array
    cardsInPlay.push(cards[cardId]);
    // checks that 2 cards have been selected
    // checks for match, displays appropriate result
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert('You found a match!');
        } else {
            alert('Sorry, try again!');
        }
    }
} // end function flipCard

flipCard(0);
flipCard(2);
