//cypress has adopted mocha syntax for the development of test cases.
// Below are few of the main constructs which are majorly used in Cypress tests

// describe() : It is a way to group tests which takes 2 arguments, 1st one name of group, 2nd one is is callback function
// it() : Use it for individual test case. Takes 2 arguments , a string explaining what the test should do 
//and a callback funtion which contains actual test 

describe("My first- test group ", function(){

    beforeEach(function() {
        // runs before each test in the it block
        cy.log("I am in beforeEach")
        cy.log("running on env", Cypress.env('test'))

      })

      after(function() {
        // runs before each test in the it block
        cy.log("I am in After")
        
      })

    it("First group-First test case to visit the site", function(){
        cy.log("I am in Second Test Case")
        var reqEnv=Cypress.env('test')
        cy.visit(reqEnv)    // Just directly invoke the Cypress methods provided by the “cy” object
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
        cy.get('button[id=query-btn]').should('contain','Button')  // 
        expect(true).to.equal(false)
        
    })

    it.only("First group-Second test case to visit the site", function(){
        cy.log("I am in Second Test Case")
        cy.visit("https://example.cypress.io");    // Just directly invoke the Cypress methods provided by the “cy” object
        expect(true).to.equal(false)
    })

    it("First group-Second test case to visit the site", function(){
        cy.log("I am in Third Test Case")
        cy.visit("https://example.cypress.io");    // Just directly invoke the Cypress methods provided by the “cy” object
        expect(true).to.equal(true)
    })

    

})