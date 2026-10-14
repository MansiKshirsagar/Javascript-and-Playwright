import {test,expect}from'@playwright/test'
test("dropdown select", async({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.waitForTimeout(10000);

await page .locator('[name=username]').fill("Admin");
await page .getByPlaceholder('Password').fill('admin123')
await page.locator('.oxd-button').click();
await page.waitForTimeout(5000);
await page.getByText("//span[text()='PIM']").click();

//click on dropdown
await page.locator("(//div[@class='oxd-select-wrapper'])[3]").click();

await page.waitForSelector("//div[@role='option']//span");

let alllocator=await page.locator("//div[@role='option']//span");

    for(let locator of alllocator)
{
   let text= await locator.textContent();
if(text.includes('QA Engineer'))
{
    await locator.click();
    break;
}
   await page.waitForTimeout(5000);
}




await expect (option).toHaveValue("QA Engineer");
const alltext1=await page.waitForSelector("//div[@role='option']//span").allTextContent();
console.log(alltext1);



})