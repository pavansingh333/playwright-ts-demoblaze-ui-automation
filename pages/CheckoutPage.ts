import { Page, Locator, expect } from "@playwright/test";

export class CheckoutPage {

    readonly page: Page;
    readonly placeOrderBtn: Locator;
    readonly nameInput: Locator;
    readonly countryInput: Locator;
    readonly cityInput: Locator;
    readonly cardInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly purchaseBtn: Locator;
    readonly successTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.placeOrderBtn = this.page.locator("//button[normalize-space()='Place Order']");
        this.nameInput = this.page.locator("//input[@id='name']");
        this.countryInput = this.page.locator("//input[@id='country']");
        this.cityInput = this.page.locator("//input[@id='city']");
        this.cardInput = this.page.locator("//input[@id='card']");
        this.monthInput = this.page.locator("//input[@id='month']");
        this.yearInput = this.page.locator("//input[@id='year']");
        this.purchaseBtn = this.page.locator("//button[normalize-space()='Purchase']");
        this.successTitle = this.page.locator("//h2[normalize-space()='Thank you for your purchase!']");
    }

    async clickPlaceOrder() {

        await this.placeOrderBtn.click();
    }

    async enterOrderDetails(order: any) {

        await this.nameInput.fill(order.name);

        await this.countryInput.fill(order.country);

        await this.cityInput.fill(order.city);

        await this.cardInput.fill(order.card);

        await this.monthInput.fill(order.month);

        await this.yearInput.fill(order.year);

    }

    async purchase() {

        await this.purchaseBtn.click();

    }

    async verifyOrderPlaced() {

        await expect(this.successTitle).toHaveText('Thank you for your purchase!');
    }

}