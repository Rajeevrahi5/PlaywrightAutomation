# PlaywrightAutomation
This test framework is created using POM design pattern and tests are written using Typescript as a programming language.
We have taken https://automationexercise.com as test subject and few features have been automated, for example: Login, Signup etc..

## How to setup the framework
Step1: You need to first clone this repo in you system using command:

  `git clone https://github.com/Rajeevrahi5/PlaywrightAutomation.git`

Step2: Make sure you have [nodejs](https://nodejs.org/en/) installed.

Step3: Install browser to run test on:

    `npx playwright install <browser name>` 
    ex: npx playwright install webkit

## How to run the test
The test can be run in headless and headded mode. Follow the below commands to run the test in you preferred way.

**1. Headless mode:**

    1. npx playwright test 
    This will run all the test written in the framework

    2. npx playwright test <Name of the test file ex. LoginTest.spec.ts> 
    This will run all the test written in the framework

**2. Headed mode:**

    1. npx playwright test --headed --project webkit
    This will run all the tests in webkit browser

    2. npx playwright test LoginTest.spec.ts --headed --project webkit
    This will run all the test written in the file LoginTest.spec.ts

## How to check the test report
The test report can be checked by running the following command:
`npx playwright show-report`

## Got issues to resolve?
Email Rajeev Rahi for any queries:
`rajeev.rahi32@gmail.com`

For more information on playwright automation you can also visit:
https://playwright.dev/docs/intro



