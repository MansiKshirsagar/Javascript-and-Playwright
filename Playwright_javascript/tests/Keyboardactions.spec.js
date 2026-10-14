import {test,expect}from"@playwright/test"


test("Keyboard action", async({page})=>{

await page.goto("https://gotranscript.com/text-compare");

await page.locator('[name="text1"]').type("i am a automation Test Engineer")
await page.keyboard.press('Control+A');

await page.keyboard.press('Control+C')

await page.keyboard.press('Tab');

await page.keyboard.press("Control+V")

await page.keyboard.press('Enter');

await page.locator('[name="text2"]').type("ok i got it");

await page.waitForTimeout(5000);
})