const { test, expect } = require('@playwright/test');

test('login test @smoke', async ({ page }) => {

  // baseURL automatically comes from playwright.config.js
  await page.goto('/client');
  await page.locator("#userEmail").fill("dattacheke@gmail.com");
  await page.getByPlaceholder("enter your passsword").fill("Datta@1212");
  await page.getByRole('button', { name: "login" }).click();
  await expect(page).toHaveURL(/dashboard/);
});