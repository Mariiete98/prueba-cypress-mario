import { GraciasElements } from "./gracias.elements";

export class GraciasActions{
    static clickOk(){
        GraciasElements.botones.ok.click();
    }

    static verifyCheckVerde(){
        GraciasElements.iconos.checkVerde.should("exist");
    }
}