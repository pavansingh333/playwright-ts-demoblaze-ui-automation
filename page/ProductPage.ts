import { Page, Locator, expect } from "@playwright/test"

export class ProductPage {
    readonly page: Page;
    readonly addToCartBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.addToCartBtn = this.page.locator("//a[normalize-space()='Add to cart']");
    }

    getCategory(category: string): Locator {
        return this.page.locator(`//a[normalize-space()='${category}']`);
    }

    getProductLink(product: string): Locator {
        return this.page.locator(`//a[normalize-space()='${product}']`);
    }

    getProductPageTitle(product: string): Locator {
        return this.page.locator(`//h2[normalize-space()='${product}']`);
    }

    async clickOnCategories(category: string) {
        await this.getCategory(category).click();
    }

    async clickOnProduct(product: string) {

        await this.getProductLink(product).click();

        await expect(this.getProductPageTitle(product)).toBeVisible();
        await expect(this.getProductPageTitle(product)).toContainText(product);
    }

    async addToCart() {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('Product added')            
            await dialog.accept();
        });
        
        await this.addToCartBtn.click();

    }
}
