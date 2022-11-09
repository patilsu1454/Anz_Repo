import AnzMuchBorrow from '../../support/page_objects/AnzMuchBorrow';

describe("My first- test group -Using Page Obects", function(){
    var anzPageMB=new AnzMuchBorrow();
    
    it("Borrow Single home to live in-Estimate of more than $400,000", function(){
        anzPageMB.visit();
        anzPageMB.borrowSingleLiveInHome(0,80000,10000,500,0,100,0,10000);
        anzPageMB.clickOnHowMuchBorrowBtn();
        anzPageMB.verifyBorrowEstimation_moreThanFourLac(); 
    });

    it("Clicking the START OVER button clears the form.", function(){
        anzPageMB.visit();
        anzPageMB.borrowSingleLiveInHome(0,80000,10000,500,0,100,0,10000);
        anzPageMB.clickOnHowMuchBorrowBtn();
        anzPageMB.verifyStartOverBtn();
    });

    it("Verify borrow error Message", function(){
        anzPageMB.visit();
        anzPageMB.borrowSingleLiveInHome(0,0,0,1,0,0,0,0);
        anzPageMB.clickOnHowMuchBorrowBtn();
        anzPageMB.borrowErrorText(); 
    });

      
})