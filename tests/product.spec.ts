import { test } from '@playwright/test';
import { ProductPage } from '../page/ProductPage';
import { LoginPage } from '../page/LoginPage';
import { CartPage } from '../page/CartPage';



test("Test - Add product into cart", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login("testpavan", "test2026");
    await loginPage.verifyLoginSuccess();
    await productPage.clickOnCategories("Laptops");
    await productPage.clickOnProduct("MacBook air");
    await productPage.addToCart();
    await cartPage.openCart();
    await cartPage.verifyCart("MacBook air");

})