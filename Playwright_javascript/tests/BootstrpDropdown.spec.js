import {test,expect}from '@playwright/test'


test("dropdown",async ({page})=>{

await page.goto("https://select2.org/getting-started/basic-usage/?utm_source=chatgpt.com");
await page.waitForTimeout(3000);
await  page.locator("(//span[@role='combobox'])[3]").click();
await page.waitForTimeout(3000);

const options=await page.locator("//span//ul//li[@role='option']");
expect(options).toHaveCount(50);

const optionss=await page.locator("//span//ul//li[@role='option']");
const alltext=optionss.textContent();
console.log(alltext);

const alloptions=await page.locator("//span//ul//li[@role='option']");

for(let opt of alloptions)
{
    const value=await opt.textContent();

if(value.includes('Alaska') || value.includes("California"))
{
    await opt.click();
}
}
await page.waitForTimeout(5000);


})