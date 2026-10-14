import{test ,expect}from"@playwright/test"


test("TC01 = navigrate to backword",async({page})=>{
page.waitForTimeout(3000);
await page.goto("https://uat-ent.tradebulls.in/login");
await page.goBack();

const gettitle=await page.title();
console.log(gettitle);

await page.reload();
//page.waitForTimeout(3000);

await page.goForward();
const geturl=await page.url();
console.log(geturl);
})