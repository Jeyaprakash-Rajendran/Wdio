Feature: The testing  Website

  @testing 
  Scenario Outline: As a user, I can log into the secure area-1
    Given I am on the entering in the home page
    When I login with test id  and password
    Then I should able to see the site up and running with out issue

  @test
  Scenario Outline: As a user, I can log into the secure area-2
    Given I am on the entering in the home page
    When I login with test id  and password
    Then I should able to see the site up and running with some issue
