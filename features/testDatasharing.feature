Feature: The testing  Website

  @testingdata
Scenario Outline: User login
  Given I am on the entering in the home page with user "<username>"
  When I login with test id "<userid>" and password "<pwd>"
  Then I should able to see the site up and running with out issue as expected 

Examples:
  | username | userid | pwd      |
  | xyz      | test01 | pass123  |
  | abc      | test02 | pass456  |