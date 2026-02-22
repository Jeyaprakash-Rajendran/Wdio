Feature: The testing  Website

  @jp  
  Scenario Outline: As a user, I can log into the secure area-1
    Given I am on the entering in the home page
    When I login with test id  and password
    Then I should able to see the site up and running with out issue

  @who
  Scenario Outline: As a user, I can log into the secure area-2
    Given I am on the entering in the home page
    When I login with test id  and password
    Then I should able to see the site up and running with some issue
