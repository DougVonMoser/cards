class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Standard52 {
    constructor() {
        this.genDeck()
    }
    genDeck() {
        this.bank = [];
        let values = 'ace 2 3 4 5 6 7 8 9 10 jack queen king'.split(' ');
        let suits = 'hearts clubs spades diamonds'.split(' ');
        values.forEach(value => {
            suits.forEach(suit => {
                this.bank.push(new Card(suit, value))
            })
        })
    }
    drawOne() {
        if (this.bank.length > 0) {
            return this.bank.shift()
        } else {
            return null
        }
    }
    reset() {
        this.genDeck()
        this.shuffle()
    }
    shuffle() {
        let currentIndex = this.bank.length,
            temporaryValue, randomIndex;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1;

            temporaryValue = this.bank[currentIndex]
            this.bank[currentIndex] = this.bank[randomIndex]
            this.bank[randomIndex] = temporaryValue;
        }
    }
}

module.exports = Standard52
