import { CommonPageActions } from "../common-page/common-page.actions";
import { DetallesElements } from "./detalles.elements";

export class DetallesActions{
    static clickAnadirCarta(){
        DetallesElements.obtenerBotones.anadirCarta.click()
    }

    static verifyProductDetailsPageDisplayed(){
    DetallesElements.obtenerBotones.anadirCarta.should('be.visible')
    }

    static verifyProductAddedMessage(){
    CommonPageActions.verifyAlert('Product added')
    }
}

