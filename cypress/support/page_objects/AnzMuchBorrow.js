const URL = 'https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/';
const ATSingle = 'input#application_type_single';
const HomeToLiveIn = 'input#borrow_type_home';
const AnnIncome = 'input[aria-labelledby=q2q1]';
const AnnOtherIncome = 'input[aria-labelledby=q2q2]';

class AnzMuchBorrow{
     visit(){
        cy.visit(URL);
    }
   
     borrowSingleLiveInHome(dependents,income,othIncome,expenses,homeLoanRepay,otherLoanRepay,otherCommit,totalCrCardlim){
        cy.get(ATSingle).should('be.checked');
        cy.get(HomeToLiveIn).should('be.checked');
        cy.get('select[title="Number of dependants"]').select(dependents.toString()).should('have.value', dependents.toString());
        cy.get(HomeToLiveIn).should('be.checked');
        cy.get(AnnIncome).type(income);
        cy.get(AnnOtherIncome).type(othIncome);
        cy.get('input#expenses').type(expenses);
        cy.get('input#homeloans').type(homeLoanRepay);
        cy.get('input#otherloans').type(otherLoanRepay);
        cy.get('input[aria-labelledby=q3q4]').type(otherCommit);
        cy.get('input#credit').type(totalCrCardlim);
        
    }
    
    borrowErrorText(){
        cy.contains("Based on the details you've entered, we're unable to give you an estimate of your borrowing power with this calculator. For questions, call us on 1800 035 500.").should('be.visible');
    }

    clickOnHowMuchBorrowBtn(){
        cy.contains('Work out how much I could borrow').should('be.visible').click();
     }

    verifyBorrowEstimation_moreThanFourLac(){
        cy.wait(4000);
        cy.get('span#borrowResultTextAmount').then(($element)=>{
           let amt =$element.text().substring(1);
           amt=amt.replace(',', '');
           cy.log('BorrowEstimation amount is :' +amt);
           expect(Number(amt)).to.be.greaterThan(400000);
        });
    }
  
    verifyStartOverBtn(){
        cy.contains('Start over').should('be.visible').click();
        cy.wait(4000);
        cy.contains('Work out how much I could borrow').should('be.visible')
        cy.get(AnnIncome, {timeout:6000}).then(($element)=>{
            const linkText=$element.text(); 
            cy.log(linkText);            
            expect(linkText).is.eql('');            
            });

        cy.get('input#otherloans',{timeout:6000}).then(($element)=>{
             const linkText=$element.text(); 
             cy.log(linkText);            
             expect(linkText).is.eql('');            
            });
      
       } 
}
  export default AnzMuchBorrow;