Feature: Product Search
  As a user
  I want to be able to search for a product
  So that I can find and view the details of the desired product

  Scenario: Searching for a product
    Given Login to the application using custom command
    Given Search a product with product name
    And Click on the first product
    Then Verify product name in product details page
    Then Verify add to cart button in product details page
    Then Verify add to wishlist button in product details page
    Then Verify to-compare text in product details page