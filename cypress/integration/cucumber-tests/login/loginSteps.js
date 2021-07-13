//This is step definition file.
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import BankLoginPage from '../../../../cypress/support/page_objects/BankLoginPage';

Given('I open the login page', () => {
    BankLoginPage.visit();
})

When('I fill username with {string}', username => {
    BankLoginPage.fillUsername(username);
})

When('I fill password with {string}', password => {
    BankLoginPage.fillPassword(password);
})

When('I click on submit button', () => {
    BankLoginPage.submit();
})

Then('I should see home page', () => {
   cy.get('#account_summary_tab').should('be.visible');
})

Then('I should see error message', () => {
    BankLoginPage.shouldShowErrorMessage();
})