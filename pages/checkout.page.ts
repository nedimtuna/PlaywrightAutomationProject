import{test,expect, Page, Locator} from '@playwright/test'

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postalCodeField: Locator;
    readonly continueButton: Locator
    readonly finishButton: Locator;
    readonly backHomeButton: Locator;

constructor  (page: Page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.postalCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('//input[@name = "continue"]');
    this.finishButton = page.locator('#finish');
    this.backHomeButton = page.locator('#back-to-products')
}

async fillCheckoutForm(firstname:string, lastname:string, postalcode:string) {
    await this.firstNameField.fill(firstname);
    await this.lastNameField.fill(lastname);
    await this.postalCodeField.fill(postalcode);
    await this.continueButton.click();
}
async verifyProceedCheckout (){
    await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
}
async finishCheckout() {
    await this.finishButton.click();
    await expect(this.backHomeButton).toBeVisible();

}
}