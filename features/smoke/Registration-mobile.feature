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
      | en       | Entry   | PQA456123 | @inboxkitten.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | GBP      | Gibraltar |


    #----------------- Regvia ----------------------------------------------------------------------------------#

  @registration @asia @regvia
  Scenario Outline: register a new user without email checking
    Given the player is at Dafabet mobile registration page in "<Language>" language and Id "<RegVia>"
    When the player enters the registration details <password>, <email>, <telephone>, <firstName>, <lastName>, <birthdate>, <currency>, <country>
    Then the player sees successful message


    Examples:
      | Language | Product         | RegVia | password  | email        | telephone  | firstName  | lastName   | birthdate  | currency | country |
      | en       | OW Sports       | 10     | PQA456123 | @yopmail.com | 9876543210 | QA test OW | Dafa Asia  | 01/01/1990 | USD      | Malta   |
      | te       | Dafa sportsbook | 22     | PQA456123 | @yopmail.com | 9876543210 | QA test DS | Dafa Asia  | 01/01/1990 | INR      | చైనా    |
      | sc       | Casino Gold     | 20     | PQA456123 | @yopmail.com | 9876543210 | QA test CG | Dafa Asia  | 1990/01/01 | 人民币    | 中国     |
      | en       | Dafa sportsbook | 22     | PQA456123 | @yopmail.com | 9876543210 | QA test DS | Dafa Latam | 01/01/1990 | USDT     | Malta   |
      | es       | Dafa sportsbook | 22     | PQA456123 | @yopmail.com | 9876543210 | QA test DS | Dafa Latam | 01/01/1990 | BRL      | Brasil  |

    #------------------ Withould email checks -----------------------------------------------------------------#
  @registration @asia
  Scenario Outline: register a new user without email checking
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player navigating to "<Product>" page
    And the player navigates to Registration page
    And the player enters the registration details <password>, <email>, <telephone>, <firstName>, <lastName>, <birthdate>, <currency>, <country>
    Then the player sees successful message


    Examples:
      | Language | Product     | password  | email        | telephone  | firstName  | lastName  | birthdate  | currency | country                          |
      | en       | PT+         | PQA456123 | @yopmail.com | 9876543210 | QA test PT | Dafa Asia | 01/01/1990 | INR      | India                            |
      | th       | Live Dealer | PQA456123 | @yopmail.com | 9876543210 | QA test PT | Dafa Asia | 01/01/1990 | บาท(ไทย) | ไทย                              |
      | vn       | Games       | PQA456123 | @yopmail.com | 9876543210 | QA test GS | Dafa Asia | 01/01/1990 | VND      | Việt Nam                         |
      | en       | Arcade      | PQA456123 | @yopmail.com | 9876543210 | QA test AR | Dafa Asia | 01/01/1990 | IDR      | Indonesia                        |
      | bn       | Lottery     | PQA456123 | @yopmail.com | 9876543210 | QA test LT | Dafa Asia | 01/01/1990 | BDT      | India                            |
      | kr       | Virtuals    | PQA456123 | @yopmail.com | 9876543210 | QA test VT | Dafa Asia | 1990/01/01 | 한국 원     | 대한민국                             |
      | en       | PT+         | PQA456123 | @yopmail.com | 9876543210 | QA test PT | Dafa Asia | 01/01/1990 | INR      | India                            |
      | pk       | Live Dealer | PQA456123 | @yopmail.com | 9876543210 | QA test LD | Dafa Asia | 01/01/1990 | PKR      | Pakistan                         |
      | en       | Games       | PQA456123 | @yopmail.com | 9876543210 | QA test GS | Dafa Asia | 01/01/1990 | LAK      | Lao People's Democratic Republic |
      | en       | Arcade      | PQA456123 | @yopmail.com | 9876543210 | QA test AR | Dafa Asia | 01/01/1990 | MMK      | Myanmar                          |
      | en       | Lottery     | PQA456123 | @yopmail.com | 9876543210 | QA test LT | Dafa Asia | 01/01/1990 | KHR      | Cambodia                         |
      | pl       | Entry       | PQA456123 | @yopmail.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | PLN      | Polska                           |
      | en       | Entry       | PQA456123 | @yopmail.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | mBTC     | China                            |

    #-------------- Yopmail--------------------------------------####
  @registration @asia
  Scenario Outline: register a new user with yopmail email check
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player navigating to "<Product>" page
    And the player navigates to Registration page
    And the player enters the registration details <password>, <email>, <telephone>, <firstName>, <lastName>, <birthdate>, <currency>, <country>
    Then the player sees successful message

    Given the player navigate to yopmail provider
    Then check the "<Product>" Welcome email has been received

    Examples:
      | Language | Product | password  | email        | telephone  | firstName  | lastName  | birthdate  | currency | country   |
      | en       | Entry   | PQA456123 | @yopmail.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | GBP      | Gibraltar |
      | en       | Casino  | PQA456123 | @yopmail.com | 9876543210 | QA test CS | Dafa Asia | 01/01/1990 | EUR      | Malta     |
      | pt       | Entry   | PQA456123 | @yopmail.com | 9876543210 | QA test EN | Dafa Asia | 01/01/1990 | BRL      | Brazil    |


    #----------------------------Dafabet Latam -------------------------------------------------------#
  @registration @latam
  Scenario Outline: register a new Latam user
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player navigating to "<Product>" page
    And the player navigates to Registration page
    And the player enters the registration details <password>, <email>, <telephone>, <firstName>, <lastName>, <birthdate>, <currency>, <country>
    Then the player sees successful message


    Examples:
      | Language | Product  | password  | email        | telephone  | firstName  | lastName   | birthdate  | currency | country   |
      | pt       | Casino   | PQA456123 | @yopmail.com | 9876543210 | QA test CS | Dafa Latam | 01/01/1990 | ARS      | Argentina |
      | es       | Games    | PQA456123 | @yopmail.com | 9876543210 | QA test GS | Dafa Latam | 01/01/1990 | CLP      | Chile     |
      | pt       | Arcade   | PQA456123 | @yopmail.com | 9876543210 | QA test AR | Dafa Latam | 01/01/1990 | PEN      | Peru      |
      | es       | Virtuals | PQA456123 | @yopmail.com | 9876543210 | QA test VT | Dafa Latam | 01/01/1990 | MXN      | Mexico    |

