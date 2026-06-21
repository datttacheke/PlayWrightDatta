const { test, expect } = require ('@playwright/test');

test('Users page shows empty state when API returns no users', async ({ page }) => {

  // 1. Mock the API BEFORE page loads
  await page.route('**/api/users', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify([]),
    });
  });

  // 2. Navigate to real application URL
  await page.goto('https://www.saucedemo.com');

  // 3. Wait for page to load
  await expect(page).toHaveURL('https://www.saucedemo.com');

  // 4. Verify empty state UI appears
  const emptyState = page.locator('.empty-state');

  await expect(emptyState).toBeVisible();

  // 5. Validate empty state message
  await expect(emptyState).toContainText('No users found');
});