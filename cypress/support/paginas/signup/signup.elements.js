export class SignupElements {
    static get obtenerCampos() {
        return {
        get username() {
            return cy.get("input#sign-username");
        },
        get password() {
            return cy.get("input#sign-password");
        },
        };
    }

    static get obtenerBotones() {
        return {
        get cerrar() {
            return cy.contains('button', 'Close');
        },

        // Selecciona un tag y el texto que contiene

        get signup() {
            return cy.contains('button', 'Sign up');
        },
        };
    }
}