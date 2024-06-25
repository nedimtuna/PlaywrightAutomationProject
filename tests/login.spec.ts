import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/login.page';
import { describe } from 'node:test';
import { testData } from '../testData/testData';


test.describe('Login suite', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        //navigate to the page
        await loginPage.openURL();

    })

    test('login with standard user', async () => {
        //login with standard user
        await loginPage.login(testData.username, testData.password);
        //verify login successful login
        await loginPage.verifyLogin();

    })

    test('login with locked user', async () => {
        //login with locked user
        await loginPage.login(testData.lockedUser, testData.password);
        //verify locked user login error
        await loginPage.verifyLoginError();
    })
})