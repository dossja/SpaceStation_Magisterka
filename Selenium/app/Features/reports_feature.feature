@fixture.chrome
Feature: SpaceStation Reports

Scenario: Add report
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks add reports
    Then Insert report: "New report" "Report description" 1
    Then Clicks add report

Scenario: Assign report
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks assign: last()
    Then Clicks dropdown
    Then Clicks user: 2
    Then Clicks assign user
    Then Checks btn text: last() "IN PROGRESS"

Scenario: Change report status to in progress
    Given Open url: http://localhost:3000
    Then Insert email: Clark.Kent@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks finish: last()
    Then Checks btn text: last() "FINISHED"


Scenario: Change report status to in finished
    Given Open url: http://localhost:3000
    Then Insert email: Clark.Kent@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks finish: last()
    Then Checks label text: last() "Report archived"

Scenario: Add and cancel report
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks add reports
    Then Insert report: "Report to cancel" "Report description" 1
    Then Clicks add report
    Then Clicks show reports
    Then Clicks cancel: last()
    Then Checks label text: last() "Report cancelled"