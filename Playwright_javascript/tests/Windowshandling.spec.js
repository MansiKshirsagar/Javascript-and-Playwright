import{test,expect}from'@playwright/test'
import { promises } from 'node:dns'

test('window handling',async({page})=>{

await page.goto("https://uat-beta.tradebulls.in/");

await page.waitForTimeout(3000);
console.log(await page.title());
console.log(await page.url());

 expect(page).toHaveTitle("Trading & Stock Market Investment Broker Online in India | Tradebulls");
 
 //console.log(await page.context().pages().length);

 const page1=Promise.all([
page.waitForEvent('popup'),
page.getByTitle('Trade Now').click()

 ])
 await page.waitForTimeout(3000);
console.log(await page.context().pages().length);
})
