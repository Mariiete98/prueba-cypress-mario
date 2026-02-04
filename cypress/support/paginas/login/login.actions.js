import { LoginElements } from "./login.elements";

export class LoginActions{
    static insertarUsuario(username){
        LoginElements.obtenerCampos.username.type(username)
    }
    static insertarPassword(password){
        LoginElements.obtenerCampos.password.type(password)
    }
    static clickLogin(){
        LoginElements.obtenerBotones.login.click()
    }

    // podrian ir en otro archivo para optimizar

    // se usará:

    static loginCompleto(username, password){
        this.insertarUsuario(username)
        this.insertarPassword(password)
        this.clickLogin()
    }
}