Feature: Successful Login - Mobile

  Background: Verify Successful Login (Entry, OW Sports, Casino, Casino Gold, PT+, Live Dealer, Games, Arcade, Lottery, Virtuals)

  @Login @mobile @icore
  Scenario Outline: Mobile Dafabet entry - Login
    #Login
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player navigating to "<Product>" page
    And logs in using MIXEDCASEUSER credential
    Then Dafabet mobilepage is successfully displayed

   #Logout
    When the player logs out in current page
    Then the player has logged out from current page


    Examples:
      | Product     | Language |
      | Dafabet     | en       |
# | Ow Sports   |    en    |
      | Casino      | th       |
      | Live Dealer | id       |
      | Games       | kr       |
      | Arcade      | vn       |
      | PT+         | sc       |
      | Lottery     | in       |
      | Virtuals    | en       |
      | Casino Gold | sc       |

