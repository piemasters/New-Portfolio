Feature: Navigation
  As a visitor of the portfolio
  I want to view different pages
  So that I can view the full contents of the portfolio

  Scenario: Type in a search-term
    Given I am on the portfolio homepage
    When I navigate to the "Process" page
    Then I should see the "Process" title
