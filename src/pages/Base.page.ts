import { Page } from '@playwright/test';

export class BasePage {
    url = '';
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getUrl() {
        return this.page.url();
    }

    async navigate() {
        await this.page.goto(this.url);
    }
}