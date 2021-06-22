import addContext from 'mochawesome/addContext';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('addContext', (context) => {
    cy.once('test:after:run', (test) => addContext({ test }, context));
  });

Cypress.Commands.add("loginCommand", (username, password) => {
    cy.get('input[name=userName]').should('be.enabled').type(username)    // enter username
    cy.get('input[name=password]').should('be.enabled').type(password)    // enter password
    cy.get('input[name=submit]').should('be.visible').should('be.visible').click() 
})