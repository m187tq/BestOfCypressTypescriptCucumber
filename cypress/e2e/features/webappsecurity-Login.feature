Feature: Login to Application

    As a valid user
    I want to log into Application

    Scenario: Valid Login
        Given I open login page as "http://zero.webappsecurity.com/login.html" and title "Zero - Log in"
        When I fill username with "username"
        And I fill password with "password"
        And I click on remember me radio and login button
        Then I should see homepage as "http://zero.webappsecurity.com/bank/account-summary.html"
        Then I click on logout in userProfile dropdown button