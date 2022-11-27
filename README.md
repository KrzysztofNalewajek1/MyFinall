# Webdriverclass
## Installation:
    - Check node version node -v (if needed, install)
    - Check yarn version yarn -v (if needed, install)
    - Create project folder and navigate to it
    - yarn init
    - yarn create wdio .
      - On my local machine
      - Which framework do you want to use? (cucumber)
      - Do you want to use a compiler? (No)
      - Where are your feature files located? (defalut)
      - Where are your step definitions located? (default)
      - Do you want WebdriverIO to autogenerate some test files? (yes)
      - Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? (n)
      - Which reporter do you want to use? (allure + spec)
      - Do you want to add a plugin to your test setup? (n)
      - Do you want to add a service to your test setup? (chromedriver)
      - What is the base url?  (default)
      - Do you want me to run `npm install`  (y)

## Test creation:



## Home task:
//TA-Bootcamp-E2E
Develop E2E automated JS tests for https://www.newegg.com

//Create bootcamp.feature file with the following 2 scenarios. Prepare tests only for Desktop run

//Feature: Bootcamp E2E

//Scenario: Search bar
//Open the home page
//Close the promo banner if it appears
//Entry the word "Windows" in the search bar (top middle)
//Click the search
//Check that at least one item appears

//Scenario: Internet shop logo button
//Open the home page
//Close the promo banner if it appears
//Open "Today's Best Deals" tab
//Click on the Internet shop logo (top right corner)
//Check that the main page opened

Extra requirements:
//For task set up WebdriverIO + Cucumber (As it was done in Cucumber lectures)
//As you may already notice, the 2 first steps are the same for both scenarios. Please use Background: to reduce the number of steps.
Before sending me a task prepare README.md so I can run your tests.
Good practice, avoid magic numbers (You can google if you don't know what it means)
Use consts for variables
For assertions use WebdriverIO
Hint
For "Close the promo banner if it appears" 2 possible ideas. You can use try-catch. Or the banner disappears if you refresh the page when the banner appears.
