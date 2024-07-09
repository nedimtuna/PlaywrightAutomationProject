import { expect, Page } from "@playwright/test";

export class LoginHelper {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async validatePageDisplayedProperly() {
        await expect(this.page).toHaveTitle('Swag Labs');
    }
}