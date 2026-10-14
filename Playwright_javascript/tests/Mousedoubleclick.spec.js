import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);
    
   const button= await page.locator("//button[text()='Copy Text']");
   await button.scrollIntoViewIfNeeded()
   await button.dblclick();
   await page.waitForTimeout(1000);

   const value=await page.locator("#field2");
   await expect(value).toHaveValue("Hello World!")
   await page.waitForTimeout(5000)
});