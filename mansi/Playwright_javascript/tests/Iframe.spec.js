import {test,expect}from'@playwright/test'



test("Alert   select", async({page})=>
{
await page.goto("https://demoqa.com/frames?utm_source=chatgpt.com")
await page.waitForTimeout(5000);

//getting number of frames

const totalframe=await page.frames();
console.log('total frames are =',totalframe.length);

  //approach 1: using  name or url
//await page.frame('//framename')
const frame=await page.frame({url:'https://demoqa.com/sample.html'});

const text=await frame.locator("(//h1[@id='sampleHeading'])[1]").textContent()
console.log(text);


////appraoch 2- using frame locator
const framee=await page.frameLocator('(//iframe[@src="/sample.html"])[1]').locator("(//h1[@id='sampleHeading'])[1]");
console.log(await framee.textContent());


})