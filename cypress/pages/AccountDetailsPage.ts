import { accountDetailsLocators as locator } from "../locators/accountDetailsLocators";

export default class AccountDetailsPage {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }
     
    clickOnWelcomeDropdownAndMyAccount(){
        cy.get(locator.welcomeDropdown).click().contains("My Account").click({force: true});
    }
    
    verifyContactInformationTitleIsVisible(){
        cy.get(locator.ContactInformation).should('be.visible');
    }
    
    verifyContactEmail(email: string | number | RegExp){
        cy.get(locator.verifyemail).should("contain",email);
    }
}