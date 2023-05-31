/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/Homepage';

const loginPage = new LoginPage();
const homePage = new HomePage();
let testData;

before(function () {
    cy.fixture('testData').then(function (data) {
        testData = data;
    })
})

Given("Visit the Luma application", () => {
    loginPage.loginToApplication(Cypress.env('url'));
})

Then("Verify the correct application is launched", () => {
    cy.url().should('include', 'magento');
})

Then("Click on the sign in link", () => {
    loginPage.clickOnSignInLink();
})

Then("Verify login page Title", () => {
    loginPage.verifyLoginPageTitle();
})

Given("Enter the username and password", () => {
    loginPage.enterUsername(testData.credentials.email);
    loginPage.enterPassword(testData.credentials.password);
})

Then("Verify signin And click on signin button", () => {
    loginPage.verifySignInAndClickOnSignInButton();
})

When("Verify homepage minicart is visible", () => {
    homePage.verifyHomePageMinicartIsVisible();
})

Then("Verify username in header", () => {
    homePage.verifyUsernameInHomepage();
})

Then("Verify homepage contain men section", () => {
    homePage.verifyMenSection();
})

Then("Verify homepage contain women section", () => {
    homePage.verifyWomenSection();
})

When("Verify logo in homePage", () => {
    homePage.verifyLogo();
})

Then("Verify homepage contain What's New section", () => {
    homePage.verifyWhatsNewSection();
})

Then("Verify homepage contain Gear section", () => {
    homePage.verifyGearSection();
})

Then("Verify homepage contain Sale section", () => {
    homePage.verifySaleSection();
})

Given("Launch the application using API", () => {
    cy.request({
        method: "GET",
        url: testData.apiUrl
    }).then(response => {
        expect(response.status).to.be.eq(200);
        cy.log(response.body);
    })

})

