@fixture.chrome
Feature: SpaceStation Missions

Scenario: Correct user login
    Given Missions. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks missions
    Then Clicks show missions
    Then wait: 5
    Then Clicks add missions
    Then wait: 5