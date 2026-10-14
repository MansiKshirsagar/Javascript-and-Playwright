import{test,expect} from '@playwright/test'

test("TC01 = TO get title and Verify  " ,async ({page})=>{
page.waitForTimeout(3000);
await page.goto("https://uat-ent.tradebulls.in/login")
const webtitle =await page.title();
console.log(webtitle);
await expect(page).toHaveTitle("Tradebulls Enterprise Application");
})

test("TC02 = To get URL and verify", async ({page})=>{

await page.goto("https://uat-ent.tradebulls.in/login");
const geturl=await page.url();
console.log(geturl);
await expect(page).toHaveURL("https://uat-ent.tradebulls.in/login");
})

