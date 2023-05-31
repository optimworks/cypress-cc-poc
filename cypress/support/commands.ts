/// <reference types="cypress" />
Cypress.Commands.add("login", (url: string, email, password) => {
    cy.visit(url);
    cy.url().should('include', 'magento');
    cy.get('.panel .authorization-link').click();
    cy.get('.base').then((text) => {
        const value = text.text();
        expect(value).to.eq("Customer Login");
    })
    cy.get('#email').type(email).should('have.value', email);
    cy.get('[name="login[password]"]').type(password).should('have.value', password);
    cy.get('.action.login span').then((text) => {
        const value = text.text();
        expect(value).to.eq("Sign In");
    })
    cy.get('.action.login').click();
})

