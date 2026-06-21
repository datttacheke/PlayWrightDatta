const { Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  // Launch browser execution thread
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Take screenshot if validation fails
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, 'image/png');
  }
  // Gracefully close active browser allocations
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});
