@fixture.chrome
Feature: SpaceStation Reports

Scenario: Add report
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks add reports
    Then Insert report: "TITLE" "DESCRIPTION" 1
    Then Clicks add report

    Then wait: 10

# Scenario: Assign report
#     Given Open url: http://localhost:3000
#     Then Insert email: Lois.Lane@firm.com
#     Then Insert password: password
#     Then Clicks signin
#     Then Clicks reports
#     Then Clicks show reports
#     Then Clicks assign: 1
#     Then Clicks dropdown
#     Then Clicks user: 2
#     Then Clicks assign user
#     Then wait: 10
