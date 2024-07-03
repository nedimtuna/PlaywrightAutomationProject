import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { testData } from '../testData/testData';

test.describe('Inventory suite', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        //navigate to the page
        await loginPage.openURL();
        await expect(loginPage.page).toHaveTitle('Swag Labs');
    })
    test('add product in the cart', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        /* login with standard user*/
        await loginPage.login(testData.username,testData.password);
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        /*add item to the cart and go to the car page*/
        await inventoryPage.addItem();
        /*verify that selected item is present there*/
        await expect (inventoryPage.cartItem).toContainText('Sauce Labs Bike Light');
        /*proceed to checkout feature*/
        await inventoryPage.checkoutButton.click();
        /*verify that user is at checkout page*/
        await expect(inventoryPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    });
})

