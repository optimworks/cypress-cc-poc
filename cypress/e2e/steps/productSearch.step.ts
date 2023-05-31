/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/Homepage';

const homePage = new HomePage();
let testData;


before(function () {
    cy.fixture('testData').then(function (data) {
        testData = data;
    })
})

Given("Search a product with product name", () => {
    homePage.searchWithProductName(testData.productNames.fusionProduct);
})

Then("Click on the first product", () => {
    homePage.clickOnProductName();
})

Then("Verify product name in product details page", () => {
    homePage.verifyProductNameInProductDetailsPage();
    cy.intercept({
        method: "Get",
        url: "https://magento.softwaretestingboard.com/fusion-backpack.html"
    })
})