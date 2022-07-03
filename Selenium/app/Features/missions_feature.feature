@fixture.chrome
Feature: SpaceStation Missions

Scenario: Show missions crew
    Given Missions. Open url: http://localhost:3000
    Then reset timer
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks show missions
    Then Clicks show crew: 1
    Then write results: "Missions" "Show missions crew"

Scenario: Add missions
    Given Missions. Open url: http://localhost:3000
    Then reset timer
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks add missions
    Then Clicks add mission
    Then write results: "Missions" "Add missions"

Scenario: Add missions crew
    Given Missions. Open url: http://localhost:3000
    Then reset timer
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks show missions
    Then Clicks edit crew: last()
    Then Clicks mission crew: "1, 2, 3, 4"
    Then Clicks modify mission
    Then write results: "Missions" "Add missions crew"