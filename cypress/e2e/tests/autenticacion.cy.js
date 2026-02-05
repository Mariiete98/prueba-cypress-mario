import { CommonPageActions } from "../../support/paginas/common-page/common-page.actions";
import { CommonPageData } from "../../support/paginas/common-page/common-page.data";
import { LoginActions } from "../../support/paginas/login/login.actions";
import { LoginData } from "../../support/paginas/login/login.data";
import { Logger } from "../../support/util/logger";

describe(CommonPageData.testSuites.autenticacion, ()=>{ //este nombre se usara en muchos archivos, por eso se hace variable en common page
    it("Inicio de sesión válido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageActions.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en Log In en la barra de navegación')
        CommonPageActions.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos')
        LoginActions.insertarUsuario(LoginData.validarCredenciales.username)
        LoginActions.insertarPassword(LoginData.validarCredenciales.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en Log In para iniciar sesión')
        LoginActions.clickLogin();
        cy.wait(10000)
        Logger.verification('Verificar que se redirige al usuario a la página de inicio')
        //CommonPageActions.verifySignedUser(LoginData.validarCredenciales.username);
        CommonPageActions.signedUser.should('be.visible').and('contain.text', LoginData.validarCredenciales.username); 
        
    });

    it("Inicio de sesión inválido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageActions.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en Log In en la barra de navegación')
        CommonPageActions.clickOnLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos')
        LoginActions.insertarUsuario(LoginData.validarCredenciales.username) // probamos aunque sea valido
        LoginActions.insertarPassword('contrasenainvalida') // sera lo invalido

        Logger.stepNumber(4)
        Logger.step('Hacer clic en Log In para iniciar sesión')
        LoginActions.clickLogin();


        Logger.verification('Verificar que se muestra un mensaje de error indicando que falla el inicio de sesión')
        LoginActions.verifyWrongPasswordMessage(); // debe saltar que es invalido
        
    });

});