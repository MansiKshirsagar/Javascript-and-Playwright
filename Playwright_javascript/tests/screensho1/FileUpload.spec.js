import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(5000);
    
    //single file upload
    await page.locator("#singleFileInput");
     await page.locator("#singleFileInput").setInputFiles("F:\\Automation\\javascript_New\\Playwright_javascript\\tests\\UploadFiles\\File1_upload.txt");

    await page.waitForTimeout(5000);

    //multiple file upload
    await page.locator("#multipleFilesInput").setInputFiles(["F:\\Automation\\javascript_New\\Playwright_javascript\\tests\\UploadFiles\\File1_upload.txt","F:\\Automation\\javascript_New\\Playwright_javascript\\tests\\UploadFiles\\File2_Upload.txt"])
    await page.waitForTimeout(5000);

    //single & multiple file remove
    await page.locator("#multipleFilesInput").setInputFiles([]);
     await page.waitForTimeout(5000);

     

})