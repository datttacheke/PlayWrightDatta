// @ts-check
const { test, expect, chromium } = require('@playwright/test');

test('@Web First playwright Test', async ({ browser }) => {
   
    const context = await browser.newContext(); //creating new newContext for browser
    const page = await context.newPage(); //creating new newContext for page
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');

});

test('@Text google search Test', async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.locator("[jsname='yZiJbe']").pressSequentially('mulsoft');

    await page.locator(".G43f7e li").first().waitFor();
    const SearchResults = await page.locator(".wM6W7d[role='presentation']").allTextContents();
    console.log(SearchResults);
    
   await page.locator(".wM6W7d[role='presentation']").filter({hasText:"mulesoft developer"}).click();
  //await page.pause();
  
//   await page.getByRole('combobox', { name: 'Search' }).fill('mulsoft');
//   await page.getByText('mulesoft salesforce').click();
   console.log(await page.title());
   //await expect(page).toHaveTitle('Google Search');
   await page.screenshot({ path: 'screenshot.png' });


});