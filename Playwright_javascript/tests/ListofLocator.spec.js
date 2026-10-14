import{test,expect}from"playwright/test"

test(" TC01==",async ({page})=>{

await page.goto("https://uat-ent.tradebulls.in/");
await page.waitForTimeout(5000);

await page.locator("input[id='username']").fill("E9592");
//await page.fill("input[id='username']","E9592");
//await page.type("input[id='username']","E9592");
await page.waitForTimeout(10000);

await page.locator("input[id='password']").fill("Jun@2026");
//await page.fill("input[id='password']","Jun@2026");
//await page.type("input[id='password']","Jun@2026");
await page.waitForTimeout(20000);


//await page.click("//button[contains(@class,'MuiButton-root MuiButton-contained')]");
await page.locator("//button[contains(@class,'MuiButton-root MuiButton-contained").click();
await page.waitForTimeout(10000);

await page.locator("svg[data-testid='CloseSharpIcon']").click();
await page.waitForTimeout(10000);

const alllinks=await page.$$("//div//li");

for(const link of alllinks)
{
    let weblinks =link.textContent();
    console.log(weblinks);
}


})