class PaymentForm {
    constructor(token) {
        //this.token = token;
        this.config = this._fetchConfig(token);
        this.card = new Card(this._parseCardConfig(this.config));
        this.upi;
        this.netBanking;
    }

    //This method should fetch the config from backend
    _fetchConfig(token){
        console.log("fetching config for token");
    }

    _parseCardConfig(config){
        console.log("parsing config for cards");
        return {
            "schemems" : ["visa", "mastercard", "rupay"],
            "card_type" : ["credit_card", "debit_card", "prepaid_card"]
        }
    }

}
