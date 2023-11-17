import { Locator, Page } from "@playwright/test";
import BasePage from "../home/BasePage";
const { expect } = require('@playwright/test');

class DeletePage {
    page: Page
    linkContinue:Locator
    textLoggedUsernameVisible:Locator
    buttonDelete:Locator
    textVerifyAcoountDeleted: Locator
    buttonContinue: Locator
    constructor(page: Page) {
        this.page = page
        this.linkContinue = page.getByRole('link', { name: 'Continue' })
        this.textLoggedUsernameVisible = page.getByRole('link', { name: ' Logout' })
        this.buttonDelete = page.getByRole('link', { name: ' Delete Account' })
        this.textVerifyAcoountDeleted = page.getByText('Account Deleted!')
        this.buttonContinue = page.getByRole('link', { name: 'Continue' })
    }

    async deleteAccount() {
        await this.linkContinue.click()
        await this.textLoggedUsernameVisible.isVisible()
        await this.buttonDelete.click()
        await expect (this.textVerifyAcoountDeleted).toBeVisible()
        await this.buttonContinue.click()
      }


}export default DeletePage