import {test, expect} from '@playwright/test'
import Homepage from '../../page-object/home/HomePage'
import DeletePage from'../../page-object/onboarding/DeletePage'
import SignupPage from '../../page-object/onboarding/SignupPage'
import UtilityHelper from '../../utility/UtilityHelper'

const testData = JSON.parse(JSON.stringify(require('../../test-data/test-data.json')))

test('Test delete account',async({page}) => {
    let homePage = new Homepage(page)
    let deletePage  = new DeletePage(page)
    let signupPage = new SignupPage(page)
    let utilityHelper = new UtilityHelper()

    // Step1: Enter the Automation exercise URL on browser
    await homePage.goToAutomationExerciseURL(testData.url)

    // Step2:  Verify Signup/Login link is visible
    await homePage.verifySignupOrLoginLinkIsVisible()

    // Step3: Click on signup/Login button
    await homePage.clickSignupOrLoginLink()

    // Step4: Signup on automation exercise website
    await signupPage.signupAutomationExercise(testData.firstName, (await utilityHelper.randomEmailGenerator()).toString())

    // Step5: Enter Account iformation details
    await signupPage.enterAccountInformationDetails(testData.title, testData.password, testData.day, testData.month, testData.year)

    // Step6: Enter Address information details
    await signupPage.fillAdressInformation(testData.firstName, testData.lastName, testData.company, testData.address, testData.address2, testData.country, testData.state, testData.city, testData.zipcode, testData.mobileNumber)

    // Step6: Account created sucessfully
    await signupPage.createAccountAndVerify()

    // Step7:Delete Account
    await deletePage.deleteAccount()

    // Step8: Verify Homepage title
    await homePage.verifyHomePageTitle()

    
})