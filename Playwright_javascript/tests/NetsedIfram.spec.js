import {test,expect}from'@playwright/test'



test("Nsted Iframes", async({page})=>
{
await page.goto("https://xqa.io/practice/nested-frames")
await page.waitForTimeout(5000)


const parent=await page.frameLocator("#frame1");
const text=parent.locator("//p[text()='Parent Iframe']")
console.log(await text.textContent());


// const Childframe=parent.childFrames();
// const textchild=Childframe[0].locator("//p[text()='Child Iframe']")
// console.log(await text.textContent());


const parent = await page.locator('iframe').contentFrame();//we cannot use content frame method for frame locator its a locator method

const childFrames = parent.childFrames();

const child = childFrames[0];

const text = await child.locator("//p[text()='Child Iframe']").textContent();

console.log(text);
})