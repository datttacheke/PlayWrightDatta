const { test, expect } = require('@playwright/test');

test('client app login', async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/client");
await page.locator("#userEmail").fill("dattacheke@gmail.com");
await page.getByPlaceholder("enter your passsword").fill("Datta@1212");
await page.getByRole('button',{name:"login"}).click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").last().waitFor;

await page.locator(".card-body").filter({hasText:"iphone 13 pro"})
.getByRole('button',{name:"Add To Cart"}).click();

await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
await page.locator("div li").first().waitFor;

await expect(page.getByText("iphone 13 pro")).toBeVisible();
await page.getByRole('button',{name:"Checkout"}).click();

await expect(page.locator(".user__name [type='text']").first()).toHaveText("dattacheke@gmail.com");
await page.getByPlaceholder("Select Country").pressSequentially("ind");
await page.getByRole('button',{name:"India"}).nth(1).click();
await page.getByText("Place Order").click();

await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});
