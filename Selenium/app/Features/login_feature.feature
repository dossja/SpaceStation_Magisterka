@fixture.chrome
Feature: SpaceStation Login

Scenario: Correct user login
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    # Then wait: 5
        #Examples: Different outputs
            #| email |
            #| Lois.Lane@firm.com |

Scenario: Assign report
    Given Open url: http://localhost:3000
    Then Insert email: Lois.Lane@firm.com
    Then Insert password: password
    Then Clicks signin
    Then Clicks reports
    Then Clicks show reports
    Then Clicks assign: 1
    Then Clicks dropdown
    Then Clicks user: 1
    Then wait: 10
