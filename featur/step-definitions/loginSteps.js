const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/tests');
const { LoginPage } = require('../page-objects/LoginPage');

Given('I navigate to the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When('I submit the username {string} and password {string}', async function (username, password) {
  await this.loginPage.login(username, password);
});

Then('I should be redirected to the secure products dashboard', async function () {
  await expect(this.page).toHaveURL(/.*inventory.html/);
});

Then('I should see an explicit error message {string}', async function (expectedErrorMessage) {
  const actualError = await this.loginPage.getErrorMessageText();
  expect(actualError).toContain(expectedErrorMessage);
});
