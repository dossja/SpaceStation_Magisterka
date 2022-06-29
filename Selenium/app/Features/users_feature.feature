@fixture.chrome
Feature: SpaceStation Users

Scenario: Add user manager
    Given Users. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks users
    Then Clicks add users
    Then Insert user: "Jan" "Kowalski" 1 True
    Then Clicks add user
    Then write results: "Users" "Add user manager"

Scenario: Delete user
    Given Users. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks users
    Then Clicks show users
    Then Clicks delete: last()
    Then write results: "Users" "Delete user"

Scenario: Add user not manager
    Given Users. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks users
    Then Clicks add users
    Then Insert user: "Jan2" "Kowalski2" 2 False
    Then Clicks add user
    Then write results: "Users" "Add user not manager"

Scenario: Login as not manager
    Given Users. Open url: http://localhost:3000
    Then Insert email: Jan2.Kowalski2@firm.com
    Then Insert password: password
    Then write results: "Users" "Login as not manager"

Scenario: Edit user
    Given Users. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks users
    Then Clicks show users
    Then Clicks edit: last()
    Then Change user: "3" "3" "." 3 False
    Then Clicks modify user
    Then write results: "Users" "Edit user"