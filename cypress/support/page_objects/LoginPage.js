import FindflightPage from "./FindflightPage";

class LoginPage {

    getUsername(){
        return cy.get('input[name=userName]');
    }

    getPassword(){
        return cy.get('input[name=password]');
    }

    getSubmit(){
        return  cy.get('input[name=submit]');
    }

    visitApp(){
        cy.addContext(Cypress.env('url'))
        cy.visit('http://demo.guru99.com/test/newtours/index.php') 
        return this;
    }

    // visitAppBasedOnEnv(env){
    //     if(env.includes("qa"))
    //     cy.visit(env) 
        
    //     else(env.includes("uat"))
    //     cy.visit(env) 
        
    //     cy.log('Tests started executing on environment :'+env)
    //     return this;
    // }
    
    enterUserNameAndPswd(username,password){
        this.getUsername().should('be.enabled').type(username); 
        this.getPassword().should('be.enabled').type(password);
        this.getSubmit().should('be.visible').click()
        cy.title().should('eq','Login: Mercury Tours')
        cy.get('a').contains('Flights').click()  
        return new FindflightPage();
    }

}
export default LoginPage;