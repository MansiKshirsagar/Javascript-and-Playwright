import {test,expect}from"@playwright/test"


test('login',async({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");

await page.locator('#username').fill('E9592');
await page.locator('#password').fill('Jun@2026');
await page.getByText('Sign in').click();

await page.waitForTimeout(5000);

const welcometext=await page.locator("//p[text()='Welcome ' ]").textContent();
expect(welcometext.trim()).toContain('Welcome ')

await page.locator("//div[text()='Santosh S']").click();

await page.locator("//span[contains(text(),'Logout')]").click();

})


test.only("homepage",async({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");
await page.locator('#username').fill('E9592');
await page.locator('#password').fill('Jun@2026');
await page.getByText('Sign in').click();
await page.waitForTimeout(5000);
const welcometext=await page.locator("//p[text()='Welcome ' ]").textContent();
expect(welcometext.trim()).toContain('Welcome ')

await page.waitForTimeout(2000);
await page.locator("//span[text()='Mutual Fund']").click();

const mftext=await page.locator("//h4[text()='Mutual Fund']").textContent();
expect(mftext).toContain("Mutual Fund");

await page.locator("//div[text()='Santosh S']").click();
await page.locator("//span[contains(text(),'Logout')]").click();

})