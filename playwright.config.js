// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

const ENV = process.env.ENV || 'dev';

// You can expand these URLs as needed
const environments = {
  dev: {
    baseURL: 'https://dev.your-app.com',
  },
  qa: {
    baseURL: 'https://qa.your-app.com',
  },
  prod: {
    baseURL: 'https://your-app.com',
  },
};

module.exports = defineConfig({
  testDir: './tests',

  // Use Jenkins-friendly reporter
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  use: {
    baseURL: environments[ENV].baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  outputDir: 'test-results',
});