Feature: User sign in to webapp

  Scenario: As a user, I can sign in to given webapp

    Given I am on the login page
    When I should see a email field is displayed
    Then I signin with "test2134@test.com"
