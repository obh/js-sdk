class Card {
    constructor(config){
        this.config = config;
        this.cardDetails = {};
    }

    _defaultConfig() {
        return {
            "schemems" : ["visa", "mastercard", "rupay"],
            "card_type" : ["credit_card", "debit_card", "prepaid_card"]
        }
    }

    // this method will update card config based on token data
    updateCardConfig() {

    }

    setCardDetails(cardNum, cardExpiryYY, cardExpiryMM, cardCVV) {
        this.cardDetails = {
            "cardNumber" : cardNum,
            "cardExpiryMM" : cardExpiryYY,
            "cardExpiryYY" : cardExpiryYY,
            "cardCVV" : cardCVV
        }
    }

    getCardDetails() {
        return this.cardDetails;
    }

    getCardConfig() {
        return this.config;
    }
}
