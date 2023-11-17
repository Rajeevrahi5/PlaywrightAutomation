import { Locator, Page } from "@playwright/test";

const { expect } = require('@playwright/test');

class LoginPage {
    page: Page
    textLoginTitle:Locator
    textEmailId: Locator
    textPassword: Locator
    loginButton: Locator
    invalidLoginMessage: Locator

    constructor(page: Page) {
        this.page = page;
        this.textLoginTitle = page.getByRole('heading', { name: 'Login to your account' })
        this.textEmailId = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.textPassword = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.invalidLoginMessage = page.getByText('Your email or password is incorrect!')
    }

    async loginOnAutomationExercise(emailId: string, password: string) {
        await this.textLoginTitle.isVisible()
        await this.textEmailId.fill(emailId)
        await this.textPassword.fill(password)
        await this.loginButton.click() 
    }

    async verifyErrorMessageOnInvalidLogin() {
        await expect(this.invalidLoginMessage).toBeVisible()
    }
}

export default LoginPage