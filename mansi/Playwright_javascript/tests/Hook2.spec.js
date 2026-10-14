import {test,expect}from"@playwright/test"

let page;
test.beforeEach(async({browser})=>{
page =await browser.newPage();
await page.goto("https://uat-ent.tradebulls.in/login");
await page.locator('#username').fill('E9592');
await page.locator('#password').fill('Jun@2026');
await page.getByText('Sign in').click();

})

test.afterEach(async()=>{
await page.locator("//div[text()='Santosh S']").click();
await page.locator("//span[contains(text(),'Logout')]").click();
})

test('Homepage',async()=>{
await page.waitForTimeout(5000); 
const welcometext=await page.locator("//p[text()='Welcome ' ]").textContent();
expect(welcometext.trim()).toContain('Welcome')

})


test("Mutual fund",async()=>{
await page.waitForTimeout(5000); 
await page.locator("//span[text()='Mutual Fund']").click();
const mftext=await page.locator("//h4[text()='Mutual Fund']").textContent();
expect(mftext).toContain("Mutual Fund");
})