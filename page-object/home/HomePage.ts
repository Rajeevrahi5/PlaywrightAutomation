import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

const { expect } = require('@playwright/test')

class Homepage extends BasePage{
    linkSignupLogin: Locator
    textHomePageTitle: Locator
    //linkHomePage: Locator


    constructor(page: Page) {
        super(page)
        this.linkSignupLogin = page.getByRole('link', { name: ' Signup / Login' })
        this.textHomePageTitle = page.getByRole('heading', { name: 'AutomationExercise' })
        //this.linkHomePage = page.getByRole('link', { name: ' Home' })
    }

    async verifySignupOrLoginLinkIsVisible() {
        await expect(this.linkSignupLogin).toBeVisible()
    }

   // async verifyHomePageLink() {
   //     await expect(this.linkHomePage).toBeVisible()
   // }

    async verifyHomePageTitle() {
        await expect(this.textHomePageTitle).toBeVisible()
    }

    async clickSignupOrLoginLink() {
        this.linkSignupLogin.click()
    }
}
export default Homepage
