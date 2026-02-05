export class GraciasElements{
    static get botones(){
        return{
            get ok(){
                return cy.contains("button", "OK");
            },
        };
    }

    static get iconos(){
        return{
            get checkVerde(){
                return cy.get(".sa-success");
            },
        };
    }



}