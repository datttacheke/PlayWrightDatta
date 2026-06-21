const { defineConfig, devices } = require('@playwright/test');

const ENV = process.env.ENV || 'dev';

const environments = {
  dev: {
    baseURL: 'https://rahulshettyacademy.com',
  },
  qa: {
    baseURL: 'https://rahulshettyacademy.com',
  },
  prod: {
    baseURL: 'https://your-app.com',
  },
};

// SAFE fallback (important for Jenkins stability)
const selectedEnv = environments[ENV] ? ENV : 'dev';

module.exports = defineConfig({
  testDir: './tests',

  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  // CI stability improvement
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,

  use: {
    baseURL: environments[selectedEnv].baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
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