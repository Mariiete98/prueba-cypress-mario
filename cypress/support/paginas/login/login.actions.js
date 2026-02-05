import { Logger } from "../../util/logger";
import { CommonPageActions } from "../common-page/common-page.actions";
import { LoginElements } from "./login.elements";

export class LoginActions{
    static insertarUsuario(username){
        //LoginElements.obtenerCampos.username.type(username)
        // falla que a veces inserta y otras no, usar:
        //LoginElements.obtenerCampos.username.invoke('val', username)
        LoginElements.obtenerCampos.username.should('be.visible').clear().type(username);
    }
    static insertarPassword(password){
        //LoginElements.obtenerCampos.password.type(password)
        // falla que a veces inserta y otras no, usar:
        //LoginElements.obtenerCampos.password.invoke('val', password)
        LoginElements.obtenerCampos.password.should('be.visible').clear().type(password);
    }
    static clickLogin(){
        LoginElements.obtenerBotones.login.click({ force: true });
        // AÑADIDO
        //LoginElements.obtenerBotones.cerrar.click({ force: true });

    }
 

    // podrian ir en otro archivo para optimizar

    // se usará:

    static loginCompleto(username, password){
        Logger.subStep('Insert username')
        this.insertarUsuario(username)
        Logger.subStep('Insert password')
        this.insertarPassword(password)
        Logger.subStep('Click on login button')
        this.clickLogin()
    }

    static verifyWrongPasswordMessage(){
        CommonPageActions.verifyAlert("Wrong password");
    }
}