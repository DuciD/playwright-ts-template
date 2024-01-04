Feature: Forgot Password - Mobile

  Background: Verify Successful Password change for Daabet Asia

  @forgotpassword @dafabetasia
  Scenario Outline: Forgot Password change on Dafabet Asia - Mobile
    #Password reset
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player click on Cannot login link
    Then a form is displayed and the player enter the details

    Given the player navigate to yopmail provider
    When searching for his Asia player in email box
    When click on reset pasword button and enter details
    Then a password is changed successfully
       #Login with new password
    Given the player is at Dafabet mobile site in "<Language>" language
    When logs in using FORGOTPASSWORDASIA credential
    Then Dafabet mobilepage is successfully displayed
      #Password change from My Account
    When click on myAccount button and change password
    Then password has been changed successfully

    Examples:
      | Product     | Language |
      | DafabetAsia | en       |

  @forgotpassword @dafabetlatam
  Scenario Outline: Forgot Password change on Dafabet Latam - Mobile
    #Password reset
    Given the player is at Dafabet mobile site in "<Language>" language
    When the player click on Cannot login link
    Then a form is displayed and the player enter Latam details

    Given the player navigate to yopmail provider
    When searching for his Latam player in email box
    When click on Latam reset pasword button and enter details
    Then a password is changed successfully
      #Login with new credentials
    Given the player is at Dafabet mobile site in "<Language>" language
    When logs in using FORGOTPASSWORDLATAM credential
    Then Dafabet mobilepage is successfully displayed
      #Password change from My Account
    When click on myAccount button and change password
    Then password has been changed successfully

    Examples:
      | Product      | Language |
      | DafabetLatam | pt       |

  @forgotpassword @nextbetfp
  Scenario Outline: Forgot Password change on Nextbet - Mobile
    #Password reset
    Given the player is at Nextbet mobile site in "<Language>" language
    When the player click on Cannot login link Nextbet
    Then a form is displayed and the player enter Nextbet details

    Given the player navigate to yopmail provider
    When searching for his Nextbet player in email box
    When click on reset pasword button and enter details
    Then a password is changed successfully
       #Login with new password
    Given the player is at Nextbet mobile site in "<Language>" language
    When logs in using FORGOTPASSWORDNEXTBET credential
    Then Dafabet mobilepage is successfully displayed
      #Password change from My Account
    When click on myAccount button and change password
    Then password has been changed successfully

    Examples:
      | Product | Language |
      | Nextbet | en       |

  @forgotpassword @zedbetfp
  Scenario Outline: Forgot Password change on Zedbet - Mobile
    #Password reset
    Given the player is at Zedbet mobile site in "<Language>" language
    When the player click on Cannot login link in Zedbet
    Then a form is displayed and the player enter Zedbet details

    Given the player navigate to yopmail provider
    When searching for his Zedbet player in email box
    When click on reset pasword button and enter details
    Then a password is changed successfully
      #Login with new password
    Given the player is at Zedbet mobile site in "<Language>" language
    When logs in using FORGOTPASSWORDZEDBET credential
    Then Dafabet mobilepage is successfully displayed
      #Password change from My Account
    When click on Zedbet myAccount button and change password
    Then password has been changed successfully

    Examples:
      | Product | Language |
      | Zedbet  | en       |
