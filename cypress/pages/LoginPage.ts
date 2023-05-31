import { loginPageLocators as locator } from "../locators/loginPageLocators";
export default class LoginPage {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    loginToApplication(_url) {
        cy.visit(_url);
    }

    clickOnSignInLink() {
        cy.get(locator.SignLink).click();
    }

    verifyLoginPageTitle() {
        cy.get(locator.verifyTitle).then((text) => {
            const value = text.text();
            expect(value).to.eq("Customer Login");
        })
    }

    enterUsername(username: string) {
        cy.get(locator.username).type(username)
            .should('have.value', username);
    }

    enterPassword(password: string) {
        cy.get(locator.password).type(password)
            .should('have.value', password);
    }

    verifySignInAndClickOnSignInButton() {
        cy.get(locator.verifySignin).then((text) => {
            const value = text.text();
            expect(value).to.eq("Sign In");
        })
        cy.get(locator.signin).click();
    }
}