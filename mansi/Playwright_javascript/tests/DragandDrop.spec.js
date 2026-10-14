import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(2000);

    //approch one using method
     const dargme=await page.locator("#draggable");
     await dargme.scrollIntoViewIfNeeded();
     const droppable=await page.locator("#droppable");
//    await dargme.dragTo(droppable);

//approach 2 using mouse action

await dargme.hover();
await page.mouse.down();

await droppable.hover();
await page.mouse.up();

await page.waitForTimeout(2000);
})