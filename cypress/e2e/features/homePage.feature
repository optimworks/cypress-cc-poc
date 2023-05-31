Feature:  Launch and Login to Luma application

  As a user Log in to Luma application

  Scenario: Successful Login
    Given Visit the Luma application
    Then Verify the correct application is launched  
    Given Click on the sign in link
    Then Verify login page Title
    Given Enter the username and password
    Then Verify signin And click on signin button

    When Verify logo in homePage
    Then Verify username in header
    When Verify homepage minicart is visible
    Then Verify homepage contain men section
    Then Verify homepage contain women section
    Then Verify homepage contain What's New section
    Then Verify homepage contain Gear section
    Then Verify homepage contain Sale section

    Given Launch the application using API