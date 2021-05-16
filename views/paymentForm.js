class PaymentFormView {
    createPaymentForm(paymentForm, elementId) {
        let parentElement = document.getElementById(elementId);
        let form = this.createForm(parentElement);
        let cardDiv = this.insertCardForm(paymentForm.card);
        let upiDiv = this.insertUpiForm();

        parentElement.append(form);
        parentElement.append(cardDiv);
        parentElement.append(upiDiv);
    }

    createForm(parentElement) {

        let tabDiv = PaymentFormView.createElement("div", {className: "tab"});
        let cardDiv = PaymentFormView.createElement("button", {className: "tablinks", textContent: "Card", "data-tab-id": "cf-card" },
            [{ event: "click", f: PaymentFormView.clickHandle }], tabDiv);
        let upiDiv = PaymentFormView.createElement("button", {className: "tablinks", textContent: "Upi", "data-tab-id": "cf-upi"},
            [{ event: "click", f: PaymentFormView.clickHandle }], tabDiv);
        return tabDiv;
    }

    insertCardForm(card){
        let cardDiv = PaymentFormView.createElement("div", { id: "cf-card", className: "tabcontent"});
        let cardInput = PaymentFormView.createElement("h3", {textContent: "card form goes here"}, [], cardDiv);
        let cardForm = PaymentFormView.createElement("form", {}, [], cardDiv);
        let cardNum = PaymentFormView.createElement("input",
            {id: "card_number", type: "text", placeholder: "Enter your card number", size: "50"}, [], cardForm);
        let breakEle = PaymentFormView.createElement("br", {}, [], cardForm);
        PaymentFormView.createElement("br", {}, [], cardForm);
        let cardCVV = PaymentFormView.createElement("input",
            {id: "card_cvv", type:"text", placeholder: "CVV Number", size: "10"}, [], cardForm);
        PaymentFormView.createElement("br", {}, [], cardForm);
        PaymentFormView.createElement("br", {}, [], cardForm);
        let submitBtn = PaymentFormView.createElement("input", {type: "submit", value: "Submit"}, [], cardForm);
        console.log(cardDiv);
        //let cardExpiryMM = createElement("input", {id:
        return cardDiv;
    }

    insertUpiForm() {
        let upiDiv =PaymentFormView.createElement("div", { id: "cf-upi", className: "tabcontent"});
        let upiInput = PaymentFormView.createElement("h3", {textContent: "upi form goes here"}, [], upiDiv);
        return upiDiv;
    }

    static createElement(el, options, listen = [], appendTo){
        let element = document.createElement(el);
        Object.keys(options).forEach(function (k){
            if(k.startsWith('data-')){
                element.setAttribute(k, options[k]);
            } else {
                element[k] = options[k];
            }
        });
        if(listen.length > 0){
            listen.forEach(function(l){
                element.addEventListener(l.event, l.f);
            });
        }
        if(typeof appendTo !== 'undefined')  {
            appendTo.append(element);
        }
        return element;
    }

    static clickHandle(evt) {
        console.log(evt);
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        let activeId =  event.target.getAttribute("data-tab-id");
        document.getElementById(activeId).style.display = "block";
        evt.currentTarget.className += " active";
    }
}
