//using
// screenshot: 'on every failure' in config file

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://uat-ent.tradebulls.in/login');
    await page.waitForTimeout(2000);
    await page.locator('#username').fill('E9592');
    await page.locator('#password').fill('June@2025');
    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(2000);
    const value=await page.locator("//p[text()='Welcome ']")
    await expect(value).toBeVisible();
});