import { Locator, Page, expect } from '@playwright/test';
import { testData } from '../testData/testData';

export class LoginPage {
    readonly page: Page;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.userNameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('h3[data-test="error"]');
    }
    async openURL() {
        await this.page.goto(testData.url);
    }
    async login(username: string, password: string) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}