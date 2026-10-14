import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://uat-beta.tradebulls.in/');

    const value1=await page.locator("//a[text()='PRODUCTS & SERVICES']");
   await value1.hover();


   const value2 = await page.locator("//a[text()='MARKET']")

   await value2.hover();
});