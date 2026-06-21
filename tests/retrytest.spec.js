const { test, expect, config } = require('@playwright/test');

test('retry test', async () => {
  expect(1).toBe(2);
});