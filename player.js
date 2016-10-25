// untested

class Player {
    constructor(public name) {
        this.name = name;
        this.hand = []
    }
    playCard(chosenCard) {
        this.hand = this.hand.filter(card => card === chosenCard ? false : true)
    }
    receiveHand(cardArr) {
        this.hand = cardArr;
    }
    dumpHand() {
        this.hand = [];
    }
}
