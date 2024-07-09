import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { testData } from '../test-data/test-data';
import { LoginHelper } from '../helpers/login.helper';

test.describe('Login suite', () => {
    let loginPage: LoginPage;
    let loginHelper: LoginHelper;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        loginHelper = new LoginHelper(page);
        /*navigate to the page*/
        await loginPage.openURL();
        await loginHelper.validatePageDisplayedProperly();
    })
    test('login with standard user', async () => {
        /*login with standard user*/
        await loginPage.login(testData.username, testData.password);
        /*verify login successful login*/
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
    test('login with locked user', async () => {
        /*login with locked user*/
        await loginPage.login(testData.lockedUser, testData.password);
        /*verify locked user login error*/
        await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });
})