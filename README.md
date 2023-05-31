# cypress-cc-poc
# Luma

This project is about the verifying the home page elements and searching a product
So we used Cypress test automation tool for automating scripts and used Cucumber framework for designing the tests

# To install:-
1. Download/Clone the code
2. Run the following command
```
npm install
```
3. So that all dependencies which are present in package.json will be installed in your system

# To run in headless mode:-
1. Once all dependencies are installed
2. Run the following command which will execute in headless chrome browser
```
npx cypress run  --headless --browser="chrome"
```
3. After successful execution you will see the cucumber-report.html under root folder or

# To run in test dashboard:-
1. Run the following command which will open Cypress dashboard
```
npx cypress open
```
2. From dashboard you can configure which browser needs to be executed
3. From there you can select which test feature should execute 
