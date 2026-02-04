import { SignupElements } from "./signuo.elements";

export class SignupActions {
    static insertarUsuario(username){
        SignupElements.obtenerCampos.username.invoke('val', username)
    }
    static insertarPassword(password){
        SignupElements.obtenerCampos.password.invoke('val', password)
    }
    static clickSignup(){
        SingupElements.obtenerBotones.signup.click()
    }

    // podrian ir en otro archivo para optimizar

    // se usará:

    static signupCompleto(username, password){
        this.insertarUsuario(username);
        this.insertarPassword(password);
        this.clickSignup();
    }
}