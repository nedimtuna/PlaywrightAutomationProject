import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { describe } from 'node:test';
import { InventoryPage } from '../pages/inventory.page';
import { testData } from '../testData/testData';

test.describe('Inventory suite', () => {

    let loginPage: LoginPage;
    let invenotryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);

        //navigate to the page
        await loginPage.openURL();
    })

    test('add product in the cart', async ({ page }) => {

        invenotryPage = new InventoryPage(page);

        // login with standard user
        await loginPage.login(testData.username,testData.password)
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        //add item to the cart and go to the car page
        await invenotryPage.addItem();
        //verify that selected item is present there
        await expect (invenotryPage.cartItem).toContainText('Sauce Labs Bike Light');
        //proceed to checkout feature
        await invenotryPage.checkoutButton.click();
        //verify that user is at checkout page
        await expect(invenotryPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    

    })

})

