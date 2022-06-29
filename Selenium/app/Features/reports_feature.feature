@fixture.chrome
Feature: SpaceStation Reports

Scenario: Add report
    Given Reports. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks add reports
    Then Insert report: "New report" "Report description" 1
    Then Clicks add report
    Then write results: "Reports" "Add Report"

Scenario: Assign report
    Given Reports. Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks assign: last()
    Then Clicks dropdown
    Then Clicks user: 2
    Then Clicks assign user
    Then wait: 5
    Then Checks btn text: last() "IN PROGRESS"
    Then write results: "Reports" "Assign Report"

Scenario: Change report status to in progress
    Given Reports. Open url: http://localhost:3000
    Then Insert email: Clark.Kent@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks finish: last()
    Then Checks btn text: last() "FINISHED"
    Then write results: "Reports" "Change report status to in progress"

Scenario: Change report status to in finished
    Given Reports. Open url: http://localhost:3000
    Then Insert email: Clark.Kent@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks finish: last()
    Then Checks label text: last() "Report archived"
    Then write results: "Reports" "Change report status to in finished"

Scenario: Add and cancel report
    Given Reports. Open url: http://localhost:3000
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
    Then write results: "Reports" "Add and cancel report"