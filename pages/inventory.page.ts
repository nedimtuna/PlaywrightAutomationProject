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

}