/// <reference types="Cypress" />
describe('UI Advance commands interactions tests are here', function(){
  // wrap, find, parent, filter and each 
  // each method to iterate all the items
  // find method get the descendants of DOM elements of specific selector , more like query behaviour of jquery
  //

    it('visit a site, get the webelements,use should and its keywords, validate title', function(){

    cy.visit('http://demo.guru99.com/test/newtours/index.php')             // visit the site in browser
    cy.get('input[name=userName]').should('be.enabled').type('mercury')    // enter username
    cy.get('input[name=password]').should('be.enabled').type('mercury')    // enter password
    cy.get('input[name=submit]').should('be.visible').should('be.visible').click()   // click on button
    cy.title().should('eq','Login: Mercury Tours')                         // validate page title
    // also verify the time travel feature in the test runner report to make sure where we were on every step execution
    cy.get('a').contains('Flights').click()                               // click on LinkText
    cy.get('input[value=roundtrip]').should('be.checked')           // radio button should be checked by default
    cy.get('input[value=oneway]').should('not.be.checked')          // radio button should not be checked by default 
    cy.log('Selecting Passengers & fromPort starting from DropDowns and click on Continue')
    cy.get('select[name=passCount]').select('3')                    // dropdown options selecting 
    cy.get('select[name=fromPort]').select('Frankfurt')
    cy.get('input[name=findFlights]').should('be.enabled').click();
    cy.log('This will navigate to next page')
    cy.title().should('eq','Find a Flight: Mercury Tours:')


    })

    it('visit a site, check the multiple checkboxes', function(){

    cy.visit('http://demo.automationtesting.in/Register.html')             // visit the site in browser
    cy.log('Visited demo automation testing site')
    cy.get('input[type=checkbox').check(['Cricket','Hockey'])             // Multiple Checkbox selection
    cy.log('Verify both Cricket and Hockey checkboxes are checked ')
    cy.get('#checkbox1').should('be.checked').and('have.value','Cricket')  // valida
    cy.get('#checkbox3').should('be.checked').and('have.value','Hockey')
    
    })

})