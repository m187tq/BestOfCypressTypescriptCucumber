Feature: Verifying e-commerce Search to Order item functionality

  @e2e
  Scenario: user should be able to place an order
    Given user is on index page url as "https://automationteststore.com/" and page title as "A place to practice your automation skills!"
    When user clicks on search box and enters product name as "Lipstick" and click on search button
    And user should be able to see search result item and click on add to cart button
    And user enters a number in quantity box to increases items by "4" and clicks on remove icon to remove from cart
    And user enters a new product as "Lipstick" and click on search button and increases items by "6"
    And user verifies the product item by item image, unit price, quantity and grand total
    And user clicks on the Checkout button
    And user should be on account login page with option to login as "Returning Customer" or create an Account as "I am a new customer."
    And user enters login Name as "datastudioplace" and password as "Manchester1" and clicks on Login button
    And user on checkout confirmation page and validates all the order details displayed
    And user clicks on confirm order button
    And user presented with a checkout success page as "Your order #3030 has been created!"
    Then user gets an order number as "Your order #3030 has been created!" and thank message displayed as "Thank you for shopping with us!"
    And user clicks on continue and logout button
    Then user is back to home page
