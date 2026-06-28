import { Page, Locator, expect } from '@playwright/test'

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginLink = page.locator("//a[@id='login2']");
        this.usernameInput = page.locator("//input[@id='loginusername']");
        this.passwordInput = page.locator("//input[@id='loginpassword']");
        this.loginButton = page.locator("//button[text()='Log in']");
        this.logoutButton = page.locator('//a[@id="logout2"]');
    }

    async goto() {
        await this.page.goto("https://www.demoblaze.com/");
    }

    async login(username: string, password: string) {
        //click login
        await this.loginLink.click();

        //enter username
        await this.usernameInput.fill(username);

        //enter password
        await this.passwordInput.fill(password)

        //click on login button
        await this.loginButton.click();
    }

    async verifyLoginSuccess() {
        await expect(this.logoutButton).toContainText("Log out");
    }

    async logout() {

        await this.logoutButton.click();
        await expect(this.loginLink).toBeVisible({timeout:5000});
    }

}