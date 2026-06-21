const { chromium, expect } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    channel: 'chrome', // Launch Google Chrome
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.getByRole('button', { name: "Login" }).click();
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveURL(/inventory/);

  await page.context().storageState({
    path: './tests/adminState.json',
  });

  console.log('storageState.json created successfully');

  await browser.close();
})();