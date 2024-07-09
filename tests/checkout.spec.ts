import { test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutPage } from "../pages/checkout.page";
import { testData } from "../test-data/test-data";
import { LoginHelper } from "../helpers/login.helper";

test.describe('Checkout suite', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let checkoutPage: CheckoutPage;
    let loginHelper: LoginHelper;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        loginHelper = new LoginHelper(page);
        /*navigate to the page*/
        await loginPage.openURL();
        await loginHelper.validatePageDisplayedProperly();
    })
    test('proceed to checkout', async ({ page }) => {
        inventoryPage = new InventoryPage(page);
        checkoutPage = new CheckoutPage(page);
        /*login with standard user*/
        await loginPage.login(testData.username, testData.password);
        await expect(loginPage.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        /*add item end check the shopping cart*/
        await inventoryPage.addItem();
        await expect(inventoryPage.cartItem).toContainText('Sauce Labs Bike Light');
        /*navigate to the checkout page*/
        await inventoryPage.checkoutButton.click();
        await expect(inventoryPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
        /*fill the checkout form and check if user is proceed to the next checkout step*/
        await checkoutPage.fillCheckoutForm(testData.checkoutFirstName, testData.checkoutLastName, testData.postalCode);
        await expect(checkoutPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        /*finish your order*/
        await checkoutPage.finishCheckout();
        await expect(checkoutPage.backHomeButton).toBeVisible();
    });
})

