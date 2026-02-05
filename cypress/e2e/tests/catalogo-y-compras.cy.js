import { CartaActions } from "../../support/paginas/carta/carta.actions";
import { CartaElements } from "../../support/paginas/carta/carta.elements";
import { CommonPageActions } from "../../support/paginas/common-page/common-page.actions";
import { CommonPageData } from "../../support/paginas/common-page/common-page.data";
import { DetallesActions } from "../../support/paginas/detalles/detalles.actions";
import { GraciasActions } from "../../support/paginas/gracias/gracias.actions";
import { HomeActions } from "../../support/paginas/home/home.actions";
import { HomeElements } from "../../support/paginas/home/home.elements";
import { LoginActions } from "../../support/paginas/login/login.actions";
import { LoginData } from "../../support/paginas/login/login.data";
import { PlaceOrderActions } from "../../support/paginas/place-order/place-order.actions";
import { PlaceOrderData } from "../../support/paginas/place-order/place-order.data";
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
        Logger.verification('Verificar que muestra mensaje de confirmación y el producto se agrega al carrito')
        DetallesActions.verifyProductAddedMessage();
        CommonPageActions.clickOnCartOption();
        CartaActions.verifyProductAdded(producto)

        // CORREGIR LO MISMO QUE EL ANTEIOR HASTA AQUI

        Logger.stepNumber(8)
        Logger.verification('Hacer click en "Cart" en la barra de navegación')
        DetallesActions.clickAnadirCarta();
        //¿common page?

        Logger.stepNumber(9)
        Logger.verification('Verificar que se muestra la página del carrito de compras')
        CartaElements.verifyCartPageIsShow();

        Logger.stepNumber(10)
        Logger.verification('Hacer clic en el botón "Place Order"')
        CartaElements.clickOnPlaceOrderButton();

        Logger.stepNumber(11)
        Logger.verification('Completar los campos obligatorios en la página de información de envio')
        PlaceOrderActions.insertOrderInformation(PlaceOrderData.testData);

        Logger.stepNumber(12)
        Logger.verification('Hacer click en el botón "Purchase"')
        PlaceOrderActions.clickPurchase();

        Logger.stepNumber(13)
        Logger.verification('Verificar que se muestra un mensaje de confirmación y se redirige al usuario a la página de inicio')
        GraciasActions.verifyCheckVerde();
        GraciasActions.clickOk();
        HomeActions.verifyHomePageIsShow();
    });




    
});