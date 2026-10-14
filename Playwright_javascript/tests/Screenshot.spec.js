import {test,expect}from '@playwright/test'


test("Screenshot capture",async ({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");
await page.waitForTimeout(2000);
await page.screenshot({path:"tests/screensho1/"+Date.now()+".png"})

})

test("Screenshot capture full page",async ({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");
await page.waitForTimeout(2000);
await page.screenshot({path:"tests/screensho1/"+Date.now()+".png",fullPage:true})

})

test.only("Screenshot capture of single element",async ({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");
await page.waitForTimeout(2000);
const logo=await page.getByAltText("login visual");
await logo.screenshot({path:"tests/screensho1/"+Date.now()+".png"})

})