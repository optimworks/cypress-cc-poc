Feature: Product Search
  As a user
  I want to be able to search for a product
  So that I can find and view the details of the desired product

  Scenario: Searching for a product
    Given Visit the Luma application
    Then Verify the correct application is launched
    Then Click on the sign in link
    Then Verify login page Title
    Given Enter the username and password
    Then Verify signin And click on signin button
    Then Verify username in header

    Given Search a product with product name
    And Click on the first product
    Then Verify product name in product details page