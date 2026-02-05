import { CartaActions } from "../../support/paginas/carta/carta.actions";
import { CommonPageActions } from "../../support/paginas/common-page/common-page.actions";
import { CommonPageData } from "../../support/paginas/common-page/common-page.data";
import { DetallesActions } from "../../support/paginas/detalles/detalles.actions";
import { HomeActions } from "../../support/paginas/home/home.actions";
import { HomeElements } from "../../support/paginas/home/home.elements";
import { LoginActions } from "../../support/paginas/login/login.actions";
import { LoginData } from "../../support/paginas/login/login.data";
import { Logger } from "../../support/util/logger";

const user = LoginData.validarCredenciales;

const producto = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{ //este nombre se usara en muchos archivos, por eso se hace variable en common page
    it("Navegación por categorías", ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageActions.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageActions.clickOnLoginOption();
        LoginActions.loginCompleto(user.username, user.password);

      
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageActions.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeActions.clickMonitor();
        cy.wait(10000)
        Logger.verification('Verificar que se muestra la lista de productos correspondiente a la categoría seleccionada')
        HomeActions.verifyProductDisplayed('Apple monitor 24')
        HomeActions.verifyProductDisplayed('ASUS Full HD')
        
    });

    it("Agregar producto al carrito", ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como usuario registrado')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageActions.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageActions.clickOnLoginOption();
        LoginActions.loginCompleto(user.username, user.password);

      
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageActions.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeActions.clickMonitor();

        Logger.stepNumber(4)
        Logger.step('Click en producto específico')
        HomeActions.clickProducto(producto) //añadido arriba const

        Logger.stepNumber(5)
        Logger.verification('Verificar que muestra la pagina de detalles')
        DetallesActions.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.verification('Hacer click en el boton "Add to cart"')
        DetallesActions.clickAnadirCarta();

        Logger.stepNumber(7)
        Logger.verification('Verificar que muestra mensaje de confirmación y el producto....')
        DetallesActions.verifyProductAddedMessage();
        CommonPageActions.clickOnCartOption();
        CartaActions.verifyProductAdded(producto)
        
    });

    
});