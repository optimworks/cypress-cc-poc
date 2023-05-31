import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import AccountDetailsPage from '../../pages/AccountDetailsPage';

const accountPage = new AccountDetailsPage();
let testData;

before(function () {
    cy.fixture('testData').then(function (data) {
        testData = data;
    })
})

Given("Click on welcome dropdown and my account",()=>{
    accountPage.clickOnWelcomeDropdownAndMyAccount();
})

Then ("Verify contact information title is visible", ()=>{
    accountPage.verifyContactInformationTitleIsVisible();
})

Then("Verify contact email",()=>{
    accountPage.verifyContactEmail(testData.credentials.email)
})