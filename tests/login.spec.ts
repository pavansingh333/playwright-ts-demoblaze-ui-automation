import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/loginData.json'

test("Test - Login verification", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("testpavan", "test2026");
  await loginPage.verifyLoginSuccess();
})

test("Test - Logout verification", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(loginData.username, loginData.password);
  await loginPage.verifyLoginSuccess();
  await loginPage.logout();
}
)

test("test - Invalid login verification", async({page})=>{

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(loginData.invalidUsername, loginData.invalidPassword);
  await loginPage.verifyLoginError("User does not exist")
})

