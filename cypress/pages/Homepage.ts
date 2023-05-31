import { homePageLocators as locator } from "../locators/homePageLocators";
export default class HomePage {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    verifyHomePageMinicartIsVisible() {
        cy.get(locator.verifyMiniCart).should('be.visible');
    }

    verifyUsernameInHomepage() {
        cy.wait(2000);
        cy.get(locator.usernameVerification).then((val) => {
            const text = val.text();
            expect(text).to.eq("Welcome, Optimworks Luma!");
        })
    }

    verifyMenSection() {
        cy.get(locator.verifyMenSection).then((text) => {
            const value = text.text();
            expect(value).to.contain("Men");
        })
    }

    verifyWomenSection() {
        cy.get(locator.verifyWomenSection).then((text) => {
            const value = text.text();
            expect(value).to.contain("Women");
        })
    }

    searchWithProductName(productName) {
        cy.get(locator.search).type(`${productName}`+"{enter}");
        cy.wait(5000);
    }

    clickOnProductName() {
        cy.get(locator.clickOnProductName).contains('Fusion Backpack').click();
    }

    verifyProductNameInProductDetailsPage() {
        cy.get(locator.verifyProductName).then((text) => {
            const value = text.text();
            expect(value).to.eq("Fusion Backpack");
        })
    }

    verifyLogo(){
        cy.get(locator.verifyLogo).should('be.visible');
    }

    verifyWhatsNewSection() {
        cy.get(locator.verifyWhatsNewSection).then((text) => {
            const value = text.text();
            expect(value).to.contain("What's New");
        })
    }

    verifyGearSection() {
        cy.get(locator.verifyGearSection).then((text) => {
            const value = text.text();
            expect(value).to.contain("Gear");
        })
    }

    verifySaleSection() {
        cy.get(locator.verifySaleSection).then((text) => {
            const value = text.text();
            expect(value).to.contain("Sale");
        })
    }
}