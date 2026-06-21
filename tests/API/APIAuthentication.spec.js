const { test, expect } = require('@playwright/test');

test.describe('API Authentication and UI Validation Flow', () => {

    test.beforeEach(async ({ request, context, page }) => {
        // 1. Fire the API POST call to the authentication endpoint
        const loginResponse = await request.post('https://www.rahulshettyacademy.com/api/ecom/auth/login', {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                userEmail: "dattacheke@gmail.com",
                userPassword: "Datta@1212"
            }
        });

        // Ensure the API call was successful (status code 200-299)
        await expect(loginResponse).toBeOK();
        await expect(loginResponse).status().toBe(200);

        // Parse the response payload
        const responseData = await loginResponse.json();
        const authToken = responseData.token;
        console.log("Received Auth Token:", authToken);
        console.log("Response Data:", responseData);
        expect(authToken).toBeDefined();
    });

    test('should validate dashboard UI components after API login', async ({ page }) => {
        // Validate the main dashboard container header is rendered
         await page.goto('https://www.rahulshettyacademy.com/client/#/dashboard/dash');
        console.log("Dashboard Page Title:", await page.title());
        await page.pause(); // Pause to visually inspect the page during test execution
        //await expect(page.locator('h1')).toHaveText('Dashboard');
    });
});
