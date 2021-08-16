Feature: User add a product to cart and proceed to payment page

  Background: Navigate to product page from login page
    Given I am on the login page
    And I should see a email field is displayed
    When I enter the required login details
    And I click sign in button on the page
    Then I successfully logged into to ecomm web app

  #********************************************************************
  #   Scenarios for add a product to cart and proceed to payment
  # *******************************************************************

  Scenario: Validate product selected has been displayed on payment page
    When I browser the required product and add into cart
    And I proceed to payment page with required details
    Then I successfully verified the selected product on payment page