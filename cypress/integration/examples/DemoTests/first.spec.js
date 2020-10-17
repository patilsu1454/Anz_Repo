//cypress has adopted mocha syntax for the development of test cases.
// Below are few of the main constructs which are majorly used in Cypress tests

// describe() : It is a way to group tests which takes 2 arguments, 1st one name of group, 2nd one is is callback function
// it() : Use it for individual test case. Takes 2 arguments , a string explaining what the test should do 
//and a callback funtion which contains actual test 

describe("My first- test group ", function(){

    it("First group-First test case to visit the site", function(){
        cy.visit("https://example.cypress.io");    // Just directly invoke the Cypress methods provided by the “cy” object
        expect(true).to.equal(true)
    })

    it("First group-Second test case to visit the site", function(){
        cy.visit("https://example.cypress.io");    // Just directly invoke the Cypress methods provided by the “cy” object
        expect(true).to.equal(false)
    })

    

})