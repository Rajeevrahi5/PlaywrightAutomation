import { Page } from "@playwright/test";

class BasePage {
    page: Page

    constructor(page: Page){
        this.page = page
    }

    async goToAutomationExerciseURL(desiredUrl: string) {
        await this.page.goto(desiredUrl)
    }
}
export default BasePage
