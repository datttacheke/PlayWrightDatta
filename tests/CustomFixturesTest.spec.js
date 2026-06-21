const { test, expect } = require('./fixtures');

test('View Dashboard', async ({ loggedInPage }) => {
    // Test codeloggedInPage
    await loggedInPage.title().then(title => console.log(title));
});

test('View Profile', async ({ loggedInPage }) => {
    // Test code
    console.log("Profile Title:", await loggedInPage.title());
});

test('logged in test', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/inventory.html');
  console.log("Profile Title:", await page.title());
});