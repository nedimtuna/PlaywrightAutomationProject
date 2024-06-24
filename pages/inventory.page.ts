import { Expect, Locator, Page, expect, test } from "@playwright/test";

export class InventoryPage {

    readonly page: Page;
    readonly addItemButton: Locator;
    readonly shoppingCartButton: Locator;
    readonly cartItem: Locator
    readonly checkoutButton: Locator


constructor(page:Page) {

    this.page = page;
    this.addItemButton = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.shoppingCartButton = page.locator('//a[@class = "shopping_cart_link"]');
    this.cartItem = page.locator('//div[@class ="cart_item"]');
    this.checkoutButton = page.locator('#checkout');
    

}    

async addItem() {
    await this.addItemButton.click();
    await this.shoppingCartButton.click();
}
async verifyAddItem() {
    await expect(this.cartItem).toContainText('Sauce Labs Bike Light');
}

async proccedToCheckout(){
    await this.checkoutButton.click();
}

async verifyCheckout() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
}
}