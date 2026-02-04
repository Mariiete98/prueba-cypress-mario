import { LoginElements } from "./login.elements";

export class LoginActions{
    static insertarUsuario(username){
        //LoginElements.obtenerCampos.username.type(username)
        // falla que a veces inserta y otras no, usar:
        LoginElements.obtenerCampos.username.invoke('val', username)
    }
    static insertarPassword(password){
        //LoginElements.obtenerCampos.password.type(password)
        // falla que a veces inserta y otras no, usar:
        LoginElements.obtenerCampos.password.invoke('val', password)
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