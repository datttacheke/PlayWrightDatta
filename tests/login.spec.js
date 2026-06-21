const { test, expect } = require('@playwright/test');

test('login test @smoke', async ({ page, baseURL }) => {

  await page.goto(`${baseURL}/login`);

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});