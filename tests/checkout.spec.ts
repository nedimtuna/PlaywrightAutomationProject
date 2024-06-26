import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutPage } from "../pages/checkout.page";
import { testData } from "../testData/testData";




test.describe('Checkout suite', () => {

    let loginPage: LoginPage;
    let invenotryPage: InventoryPage;
    let checkoutPage: CheckoutPage;


    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        invenotryPage = new InventoryPage(page);
        checkoutPage = new CheckoutPage(page);
        //navigate to the page
        await loginPage.openURL();

    })


    test('proceed to checkout', async ({ page }) => {
        //login with standard user
        await loginPage.login(testData.username, testData.password);
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        //add item end check the shopping cart
        await invenotryPage.addItem();
        await expect(invenotryPage.cartItem).toContainText('Sauce Labs Bike Light');
        //navigate to the checkout page
        await invenotryPage.checkoutButton.click();;
        await expect(invenotryPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
        //fill the checkout form and check if user is proceed to the next checkout step
        await checkoutPage.fillCheckoutForm(testData.checkoutFirstName, testData.checkoutLastName, testData.postalCode);
        await expect(checkoutPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        //finish your order
        await checkoutPage.finishCheckout()




    })
})

