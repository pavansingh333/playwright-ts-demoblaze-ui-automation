import { test } from '@playwright/test';
import { LoginPage } from '../page/LoginPage';

test("Test - Login verification", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("testpavan", "test2026");
  await loginPage.verifyLoginSuccess();
})

test("Test - Logout verification", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("testpavan", "test2026");
  await loginPage.verifyLoginSuccess();
  await loginPage.logout();
}
)
