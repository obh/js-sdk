class Model {
    constructor(){
        this.model  = {name : "Stuart", age: "21", gender: "male"};
        this.observers = [];
    }
    subscribe(observer){
        this.observers.push(observer);
    }

    notifyObservers(attrName, newVal){
        for(var i = 0; i < this.observers.length; i++){
            this.observers[i](attrName, newVal);
        }
    }

    getCurrentName(nameKey){
        return this.model[nameKey];
    }
    setNameValue(nameKey, value){
        this.model[nameKey] = value;
        this.notifyObservers(nameKey, value);
    }

}

class ViewModel{
    constructor(model){
        this.bind = function(viewElement, modelElement){
            viewElement.value = model.getCurrentName(modelElement);
            model.subscribe(function(attrName, newValue){
                document.getElementsByName(attrName).forEach(function(elem){
                    elem.value = newValue.toUpperCase();
                });
            });
            viewElement.addEventListener('input', function(){
                model.setNameValue(viewElement.name, viewElement.value);
        });
    }
   }
}

function buildModelView = function(model){
    var base = document.getElementById("card");
    var cardElement = document.createElement("div");

    var cardNumber = document.createElement("input");
    cardNumber.setAttribute("type", "text");
    var cardCVV = document.createElement("input");
    cardCVV.setAttribute("type", "text");

    cardElement.appendChild(cardNumber);
    cardElement.appendChild(cardVV);

    return cardElement;
}
