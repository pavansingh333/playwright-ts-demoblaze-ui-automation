import { Page, Locator, Expect, expect } from "@playwright/test";

export class CartPage{

    readonly page : Page;
    readonly cartLink : Locator;
    readonly cartTitleLink : Locator;
    readonly productTitleLink : Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.cartLink=this.page.locator("//a[@id='cartur']");
        this.cartTitleLink=this.page.locator("//h2[normalize-space()='Products']");
        this.productTitleLink=this.page.locator("//tbody[@id='tbodyid']/tr[1]/td[2]");
    }

    async openCart(){

        await this.cartLink.click();
        await expect(this.cartTitleLink).toHaveText('Products');
    }

    async verifyCart(product:string){
        await expect(this.productTitleLink).toHaveText(product);
    }
}