class Cashfree {
    constructor(token) {
        this.token = token;
        this.paymentForm = new PaymentForm(token);
        this.paymentView = new PaymentFormView();
    }

    mount(elementId) {
        this.paymentView.createPaymentForm(this.paymentForm, elementId);
    }
}
