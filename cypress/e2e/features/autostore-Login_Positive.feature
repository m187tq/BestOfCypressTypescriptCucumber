Feature: Login Page

  Scenario Outline: user should be able to login with valid credentials
    Given user on index page url as "https://automationteststore.com" and page title as "A place to practice your automation skills!"
    When user clicks on LoginOrRegister link
    And user should be on account login page with options to login as "Returning Customer" or create an Account as "I am a new customer."
    And user enters login Name as "<loginName>" and password as "<password>" and clicks on Login button
    Then user should be presented with the following validation message as "<loginValidationMessage>"
    And user clicks on edit profile button
    And user enters the following details
      | firstName  | loginName  | telephone    | fax          |
      | firstnames | loginNames | 213-233-3340 | 213-233-7770 |
    And user clicks on Continue button to confirms profile successful update message as "Success: Your account has been successfully updated."
    When user clicks on logoff button and logout Continue Button
    Given user on index page url as "https://automationteststore.com" and page title as "A place to practice your automation skills!"


    Examples:
      | Url                              | loginName       | password    | loginValidationMessage |
      | https://automationteststore.com/ | datastudioplace | Manchester1 | Welcome back           |