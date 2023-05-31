Feature:  Verify account details

    Scenario: Verify customer details 
        Given Login to the application using custom command
        Given Click on welcome dropdown and my account
        Then Verify contact information title is visible
        Then Verify contact email