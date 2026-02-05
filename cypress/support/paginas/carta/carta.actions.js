import { CartaElements } from "./carta.elements";

export class CartaActions{
    static clickEliminar(producto){
        CartaElements.links.delete(producto).click();
    }

    static verifyProductAdded(){
        CartaElements.links.delete(producto).should('be.visible')
    }
    
}