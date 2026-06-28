import { test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import loginData from '../test-data/loginData.json'


test("Test - Add product into cart", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    await loginPage.goto();
    await loginPage.login(loginData.username, loginData.password);
    await loginPage.verifyLoginSuccess();
    await productPage.clickOnCategories("Laptops");
    await productPage.clickOnProduct("MacBook air");
    await productPage.addToCart();
    await cartPage.openCart();
    await cartPage.verifyCart("MacBook air");

})