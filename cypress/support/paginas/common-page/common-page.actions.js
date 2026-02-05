import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageActions{
    static navigateToDemoBlaze() {
        cy.visit(CommonPageData.url);
    }

    static clickOnHomeOption() {
        CommonPageElements.topMenu.home.clik();
    }

    static clickOnContactOption() {
        CommonPageElements.topMenu.contact.clik();
    }

    static clickOnAboutUsOption() {
        CommonPageElements.topMenu.aboutus.clik();
    }

    static clickOnCartOption() {
        CommonPageElements.topMenu.cart.clik();
    }

    static clickOnLoginOption() {
        CommonPageElements.topMenu.login.clik();
    }
    static clickOnSignUpOption() {
        CommonPageElements.topMenu.signup.clik();
    }
}