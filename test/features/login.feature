Feature: User login in to e-commerce webapp successfully

  Background: Navigate to login page
    Given I am on the login page
    And I should see a email field is displayed

  #********************************************************************
  #   Scenarios for user login and logout journey
  # *******************************************************************

  Scenario: Validate user able to login successfully
    When I enter the required login details
    And I click sign in button on the page
    Then I successfully logged into to ecomm web app