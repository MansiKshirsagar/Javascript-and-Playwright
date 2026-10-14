import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.waitForTimeout(2000);

   const value= await page.locator("//span[text()='right click me']");
   await value.click({button:'right'});

});