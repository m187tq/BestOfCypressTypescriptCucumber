class LoginPage {

    logoImage() {
        return cy.get('.brand')
    }

    userNameBox() {
        return cy.get('#user_login')
    }

    passwordBox() {
        return cy.get('#user_password')
    }

    submitButton() {
        return cy.get('input[name="submit"]')
    }

    userProfileImage() {
        return cy.get(':nth-child(3) > .dropdown-toggle')
    }

    rememberMeRadioButton() {
        return cy.get('#user_remember_me')
    }

    visitLoginPage(httpzerowebappsecuritycomloginhtml) {
        cy.visit(httpzerowebappsecuritycomloginhtml)
    }

}

export default LoginPage;
