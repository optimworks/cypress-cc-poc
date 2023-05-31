Feature:  Verify account details

    Scenario: Verify customer details 
        Given Visit the Luma application
        Then Verify the correct application is launched  
        Given Click on the sign in link
        Then Verify login page Title
        Given Enter the username and password
        Then Verify signin And click on signin button

    Given Click on welcome dropdown and my account
    Then Verify contact information title is visible
    Then Verify contact email