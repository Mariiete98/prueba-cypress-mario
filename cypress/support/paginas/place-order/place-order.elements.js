export class PlaceOrderElements {
    static get campos() {
        return{
            get name(){
                return cy.get("input#name");
            },
            get couuntry(){
                return cy.get("input#country");
            },
            get city(){
                return cy.get("input#city");
            },
            get creditCard(){
                return cy.get("input#card");
            },
            get month(){
                return cy.get("input#month");
            },
            get year(){
                return cy.get("input#year");
            },
        };
    }

    static get botones() {
        return{
            get close(){
                return cy.get('div[id="orderModal"] button').eq(1);
            },
            get purchase(){
                return cy.contains("button", "Purchase");
            },
        }
    }

}