//create array for cards in deck
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds"
    }
];
//create empty array for selected cards
var cardsInPlay = [];

var flipCard = function(cardId) {
    // logs selected card
    console.log("User flipped " + cards[cardId].rank);
    // 'sees' selected cards
    console.log(cards[cardId].cardImage);
    // logs suit of selected card
    console.log(cards[cardId].suit);
    // adds selected card to cardsInPlay array
    cardsInPlay.push(cards[cardId].rank);
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
