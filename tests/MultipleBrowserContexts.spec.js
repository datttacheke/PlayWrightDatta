import { test, expect } from '@playwright/test';

test('Admin can see messages sent by a regular user', async ({ browser }) => {
  // 1. Create two isolated browser contexts
  const userContext = await browser.newContext();
  const adminContext = await browser.newContext();

  try {
    // 2. Open a unique page inside each context
    const userPage = await userContext.newPage();
    const adminPage = await adminContext.newPage();

    // 3. Perform actions as the User
    await userPage.goto('https://example.com');
    await userPage.fill('#message-input', 'Hello, Admin!');
    await userPage.click('#send-button');

    // 4. Perform actions as the Admin independently
    await adminPage.goto('https://example.com');
    const incomingMessage = adminPage.locator('.chat-feed .message');
    
    // 5. Verify the communication between contexts
    await expect(incomingMessage).toHaveText('Hello, Admin!');
  } finally {
    // 6. Ensure both contexts close gracefully
    await userContext.close();
    await adminContext.close();
  }
});