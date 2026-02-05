import { HomeElements } from "./home.elements";

export class HomeActions {
    static clickMoviles(){
        HomeElements.menuCategorias.movil.click();
    }
    static clickLaptop(){
        HomeElements.menuCategorias.laptop.click();
    }
    static clickMonitor(){
        HomeElements.menuCategorias.monitor.click();
    }

    // podrian ir en otro archivo para optimizar

    // se usará:

    static clickProducto(producto){
        HomeElements.producto(producto).click();
    }

    static verifyProductDisplayed(productName){
        HomeElements.producto(productName).should('be.visible')
    }
}