Feature: Search results

  Background:
    Given I am on the google page

  @Test1
  Scenario: Search results are more than 100000
    And I reject cookies
    When I search "Orange Bank"
    Then I see "more" than "100000" results

  @Test2
  Scenario: Search results are less than 10000
    When I search "Orange Bank"
    Then I see "less" than "10000" results
