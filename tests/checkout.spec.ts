import {test, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from "../pages/inventory.page";
import { CheckoutPage } from "../pages/checkout.page";


test.describe('Checkout suite', () =>{

    let loginPage: LoginPage;
    let invenotryPage: InventoryPage;
    let checkoutPage: CheckoutPage;

    
    test.beforeEach(async({page}) =>{

    loginPage = new LoginPage(page);
    invenotryPage = new InventoryPage(page);
    checkoutPage = new CheckoutPage(page);
    //navigate to the page
    await loginPage.openURL();

    })


    test('proceed to checkout', async({page})=>{
        //login with standard user
        await loginPage.login('standard_user', 'secret_sauce')
        await loginPage.verifyLogin();
        //add item end check the shopping cart
        await invenotryPage.addItem();
        await invenotryPage.verifyAddItem();
        //navigate to the checkout page
        await invenotryPage.proccedToCheckout();
        await invenotryPage.verifyCheckout();
        //fill the checkout form
        await checkoutPage.fillCheckoutForm('tester', 'tester', '12345');
        await checkoutPage.verifyProceedCheckout();
        //finish your order
        await checkoutPage.finishCheckout()
       
    
    
    
    })
})
