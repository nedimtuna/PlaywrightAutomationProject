import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { describe } from 'node:test';
import { InventoryPage } from '../pages/inventory.page';

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
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.verifyLogin();
        //add item to the cart and go to the car page
        await invenotryPage.addItem();
        //verify that selected item is present there
        await invenotryPage.verifyAddItem();
        //proceed to checkout feature
        await invenotryPage.proccedToCheckout();
        await invenotryPage.verifyCheckout();

    

    })

})

