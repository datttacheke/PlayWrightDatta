Feature: User Login Functionality

  Scenario: Successful login with valid credentials
    Given I navigate to the login page
    When I submit the username "standard_user" and password "secret_sauce"
    Then I should be redirected to the secure products dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given I navigate to the login page
    When I submit the username "invalid_user" and password "wrong_password"
    Then I should see an explicit error message "Epic sadface: Username and password do not match any user in this service"
