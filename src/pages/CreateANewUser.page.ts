import { BasePage } from './Base.page';

export class CreateANewUserPage extends BasePage {
    url = '';

    get firstNameInput() {
        return this.page.locator('//input[@id="first_name"]')
    }
    get lastNameInput() {
        return this.page.locator('//input[@id="last_name"]')
    }
    get userNameInput() {
        return this.page.locator('//input[@id="username"]')
    }
    get descriptionInput() {
        return this.page.locator('//input[@id="description"]')
    }
    get addressInput() {
        return this.page.locator('//input[@id="address"]')
    }
    get secondAddressInput() {
        return this.page.locator('//input[@id="address2"]')
    }
    get ageInput() {
        return this.page.locator('//input[@id="age"]')
    }
    get passInput() {
        return this.page.locator('//input[@id="user_password"]')
    }
    get createButton() {
        return this.page.locator('//button[contains(text(), "Create user")]')
    }
    get lastNameError() {
        return this.page.locator('')
    }

    async createANewUser() {
        await this.createButton.click()
    }
}