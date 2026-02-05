import { CommonPageActions } from "../../support/paginas/common-page/common-page.actions";
import { CommonPageData } from "../../support/paginas/common-page/common-page.data";
import { Logger } from "../../support/util/logger";
import { SignupActions } from "../../support/paginas/signup/signup.actions";

describe(CommonPageData.testSuites.registroYAutenticacion, ()=>{ //este nombre se usara en muchos archivos, por eso se hace variable en common page
    it("Registro de usuario válido", ()=>{
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageActions.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer click en Sign Up en la barra de navegación')
        CommonPageActions.clickOnSignUpOption();

        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupActions.insertarUsuario('random01') //dhfgjkdhgjfgj si funciona dhfgjdfhg
        SignupActions.insertarPassword('random01')

        Logger.stepNumber(4)
        Logger.step('Hacer click en Sign Up para registrar el usuario')
        SignupActions.clickSignup();
        //cy.wait(20000)
        Logger.verification('Verificar que se muestra el mensaje "Sign Up succesful'); // faltaba metodo de ese mensaje
        SignupActions.verifySignUpSuccesfulMessageIsDisplayed();

    });
});