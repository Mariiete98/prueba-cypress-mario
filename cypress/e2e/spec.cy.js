import { CartaActions } from "../support/paginas/carta/carta.actions";
import { HomeActions } from "../support/paginas/home/home.actions";
import { LoginActions } from "../support/paginas/login/login.actions";
import { LoginData } from "../support/paginas/login/login.data";

describe('template spec', () => {
  it('passes', () => {
   
    // 1a prueba
    /* 
    cy.visit('https://www.demoblaze.com/')
    cy.get('.nav-link').contains('Log in').click();
    // llama a su clase, y debe contener ese texto */

      /* Antes llamábamos a 3
      LoginActions.insertarUsuario('hola'); 
      LoginActions.insertarPassword('hola'); 
      LoginActions.clickLogin()
      */
      /*
      LoginActions.loginCompleto('hola', 'hola');

      cy.wait(10000)
    
      */

      //2a prueba
      /*
      // variables por separado
      const usuario = 'random01';
      const contrasena = 'random01'
      cy.visit('https://www.demoblaze.com/index.html')
      // click en el menu
      cy.get('.nav-link').contains('Log in').click();
      LoginActions.loginCompleto(usuario, contrasena)

      // debe contener el componente de la siguiente página el usuario de bienvenida en un nav-link invisible
      // si no lo hace, debe saltar error por el contains
      cy.get('a#nameOfUser').should('contain.text', usuario)

      cy.wait(10000)
      */

      //¿SIGN UP?

      //3a prueba HOME

      cy.visit('https://www.demoblaze.com/index.html')
      HomeActions.clickProducto('Iphone 6 32gb')
      cy.wait(10000)

      

      //4a DETALLES
      // falta testear que se añade a la carta
     
      //5a CARTA
      const usuario = 'random01';
      const contrasena = 'random01'
      cy.visit('https://www.demoblaze.com/index.html')
      cy.wait(20000) // Esperar para elegir
      CartaActions.clickEliminar('Nokia lumia 1520')
      cy.wait(20000) 
      
     //6a Place Order sin 


  })
})