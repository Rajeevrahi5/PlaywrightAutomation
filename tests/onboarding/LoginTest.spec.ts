import {test, expect} from '@playwright/test'
import LoginPage from '../../page-object/onboarding/LoginPage'
import HomePage from '../../page-object/home/HomePage'

const testData = JSON.parse(JSON.stringify(require('../../test-data/test-data.json')))

test.describe('Login on AUtomation Excercise', () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeAll(async() => {
        console.log('Setting up Login Test...')
    })

    test.beforeEach(async({page}, testInfo) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        console.log(`Starting the test: ${testInfo.title}`);
    })

    test.afterEach(async({}, testInfo) => {
        console.log(`Finished ${testInfo.title} with status: ${testInfo.status?.toString().toUpperCase()}`);
    })

    test.afterAll(async() => {
        console.log('Tests completed!!');
    })

    test('Login on automation exercise with invalid credential', async({page}) => {

        // Step1: Enter the Automation exercise URL on browser
        await homePage.goToAutomationExerciseURL(testData.url)

        // Step2: Verify signup/Login link is visible
        await homePage.verifySignupOrLoginLinkIsVisible()
        
        // Step3: Click on signup/Login button
        await homePage.clickSignupOrLoginLink()

        //Step4: Login on automation exericse
        await loginPage.loginOnAutomationExercise(testData.emailId, testData.password)
        //await page.pause()

        //Step5: Verify login error message is shown
        await loginPage.verifyErrorMessageOnInvalidLogin()
    })
})
