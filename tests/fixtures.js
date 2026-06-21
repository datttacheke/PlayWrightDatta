const base = require('@playwright/test');

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("dattacheke@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Datta@1212");
    await page.getByRole('button', { name: "login" }).click();
    await page.waitForLoadState('networkidle');
    await use(page);
  },
  //saucedemo
  context: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: './tests/adminState.json',
    });

    await use(context);
    await context.close();
  },

  // userPage: async ({ browser }, use) => {
  //     const context = await browser.newContext({
  //         storageState: 'userState.json'
  //     });

  //     const page = await context.newPage();
  //     await use(page);
  //     await context.close();
  // }
});

exports.expect = base.expect;