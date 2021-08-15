Feature: User sign in to e-commerce webapp successfully

  Background: Navigate to CreateAccount page from signin page
    Given I am on the login page
    And I should see a email field is displayed
    And I signin with "test2134@test.com"

  #********************************************************************
  #   Scenarios for creating new user account
  # *******************************************************************

  Scenario: Validate new user account has been created successfully
    Given I am on the create Account page

