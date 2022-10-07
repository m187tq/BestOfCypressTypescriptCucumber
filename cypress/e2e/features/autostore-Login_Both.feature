Feature: Login Page - Login Functionality

  Background: common steps in scenarios
    Given user on index page url as "https://automationteststore.com" and page title as "A place to practice your automation skills!"
    When user clicks on LoginOrRegister link
    And user should be on account login page with options to login as "Returning Customer" or create an Account as "I am a new customer."


  @Login_Both
  Scenario Outline: user should be able to login with valid credentials
    And user enters login Name as "<loginName>" and password as "<password>" and clicks on Login button
    Then user should be presented with the following validation message as "<loginValidationMessage>"
    And user clicks on edit profile button
    And user enters "firstName" "lastName" and EmailAddress telephone as "213-233-3340" and fax as "213-233-7770" in their respective box
    And user enters the following details
      | firstName  | loginName  | telephone    | fax          |
      | firstnames | loginNames | 213-233-3340 | 213-233-7770 |
    And user clicks on Continue button to confirms profile successful update message as "Success: Your account has been successfully updated."
    When user clicks on logoff button and logout Continue Button
    Given user on index page url as "https://automationteststore.com" and page title as "A place to practice your automation skills!"

    Examples:
      | loginName       | password    | loginValidationMessage |
      | datastudioplace | Manchester1 | Welcome back           |


  @Login_Both
  Scenario Outline: User should NOT be able to login with invalid credentials
    And user enters wrong combination of both login Name as "<loginName>" or password as "<password>"
    And user clicks on Login_Button
    Then user gets error message as "<loginValidationErrorMessage>" and still on Home page title as "<pageTitle>"

    Examples:
      | loginName       | password      | loginValidationErrorMessage                  | pageTitle     |
      | WrongLoginName  | Manchester1   | Error: Incorrect login or password provided. | Account Login |
      | datastudioplace | WrongPassword | Error: Incorrect login or password provided. | Account Login |
      | WrongLoginName  | WrongPassword | Error: Incorrect login or password provided. | Account Login |
      |                 |               | Error: Incorrect login or password provided. | Account Login |
      | datastudioplace |               | Error: Incorrect login or password provided. | Account Login |
      |                 | Manchester1   | Error: Incorrect login or password provided. | Account Login |