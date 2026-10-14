import{test,exopect,chromium}from'@playwright/test'

test("test of handle multiple windows/tab",async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
const page2=await context.newPage()

const allpages=context.pages();
console.log("No of pages ", allpages.length);

await page1.goto("https://uat-ent.tradebulls.in/dashboard");

await page2.goto("https://playwright.dev/docs/test-reporters");

})

test.only("testt of handle multiple windows/tab",async()=>{

const browser=await chromium.launch();
const context=await browser.newContext();
const page1=await context.newPage();
const allpages=context.pages();
console.log("No of pages ", allpages.length);

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

const createevent=context.waitForEvent('page');
await page1.locator("//a[contains(text(),'OrangeHRM')]").click();

const page2=await createevent;
await expect(page2).toHaveTitle("OrangeHRM HR Software | Free & Open Source HR Software | HRMS | HRIS | OrangeHRM")

await page1.waitForTimeout(5000);
})