import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { generateOrderData } from '../test-data/orderData'
import loginData from '../test-data/loginData.json'

test("Test - Place order successfully", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const orderData = generateOrderData();

    await loginPage.goto();
    await loginPage.login(loginData.username, loginData.password);
    await loginPage.verifyLoginSuccess();
    await productPage.clickOnCategories("Laptops");
    await productPage.clickOnProduct("MacBook air");
    await productPage.addToCart();
    await cartPage.openCart();
    await cartPage.verifyCart("MacBook air");
    await checkout.clickPlaceOrder();
    await checkout.enterOrderDetails(orderData);
    await checkout.purchase();
    await checkout.verifyOrderPlaced();
});