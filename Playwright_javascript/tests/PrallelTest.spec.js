import { test, expect } from '@playwright/test';

//test.describe.configure({ mode: 'parallel' });

test('Test A', async ({ page }) => {
  await page.goto('https://example.com');
});

test('Test B', async ({ page }) => {
  await page.goto('https://google.com');
});

test('Test C', async ({ page }) => {
  await page.goto('https://github.com');
});
