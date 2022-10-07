/* eslint-disable prettier/prettier */

class AccountLogoutPage{

    accountLogoutHeadingTxt(){
        return cy.get('.maintext');
    }
   saveToLogoutTxt(){
        return cy.get('.mb40 > p:nth-of-type(3)');
    }
    logoutAccountContinueBtn(){
        return cy.get(".mb40 > .btn");

}

}
export default AccountLogoutPage
