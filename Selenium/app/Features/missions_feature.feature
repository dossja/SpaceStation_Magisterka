@fixture.chrome
Feature: SpaceStation Missions

Scenario: Show missions crew
    Given Missions. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks show missions
    Then Clicks show crew: 1

Scenario: Add missions
    Given Missions. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks add missions
    Then Clicks add mission

Scenario: Add missions crew
    Given Missions. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks show missions
    Then Clicks edit crew: last()
    Then Clicks mission crew: "1, 2, 3, 4"
    Then Clicks modify mission