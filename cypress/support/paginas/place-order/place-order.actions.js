import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderActions {
    static insertName(name){
        PlaceOrderElements.campos.name.invoke("val", name);
    }

    static insertCountry(name){
        PlaceOrderElements.campos.country.invoke("val", counry);
    }

    static insertCity(name){
        PlaceOrderElements.campos.city.invoke("val", city);
    }

    static insertCreditCard(name){
        PlaceOrderElements.campos.creditCard.invoke("val", creditCardNumber);
    }

    static insertMonth(name){
        PlaceOrderElements.campos.month.invoke("val", month);
    }

    static insertMonth(year){
        PlaceOrderElements.campos.year.invoke("val", year);
    }



    static clickClose(){
        PlaceOrderElements.botones.close.click();
    }

    static clickPurchase(){
        PlaceOrderElements.botones.purchase.click();
    }

}