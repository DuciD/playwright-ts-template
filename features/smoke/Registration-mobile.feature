@registration @mobile @smoke
Feature: Successful Registration - Mobile

  Background: Checking various Registraition Smoke mobile depending of emails or languges


    #-------------- InboxKitten email checking --------------------------------------####
  @registration @asia @inboxkitten
  Scenario Outline: register a new user with Inbox Kitten email check
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player navigating to "<Product>" page
    And the player navigates to Registration page
    And the player enters the registration details <password>, <email>, <telephone>, <firstName>, <lastName>, <birthdate>, <currency>, <country>
    Then the player sees successful message

    Given the player navigate to inboxkitten email provider
    Then check the "<Product>" Welcome email has been received in InboxKitten

    Examples:
      | Language | Product | password  | email            | telephone  | firstName  | lastName  | birthdate  | currency | country   |
      | en       | Entry   | P456123 | @inboxkitten.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | GBP      | Gibraltar |


