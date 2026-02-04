export class LoginElements{
    static get obtenerCampos() {
        return {
        get username() {
            return cy.get("input#loginusername");
        },
        get password() {
            return cy.get("input#loginpassword");
        },
        };
    }

    static get obtenerBotones() {
        return {
        get cerrar() {
            return cy.contains('button', 'Close');
        },

        // Selecciona un tag y el texto que contiene

        get login() {
            return cy.contains('button', 'Log in');
        },
        };
    }
}