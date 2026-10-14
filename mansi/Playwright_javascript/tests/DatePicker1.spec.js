import {test,expect}from"@playwright/test"

test("date picker 1",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#datepicker").click();

const year="2026";
const Month= 'November'
const Date = "24"

while(true)
{

    const years=await page.locator(".ui-datepicker-year").textContent();
    const months=await page.locator(".ui-datepicker-month").textContent();

   if(years==year && months==Month)
{
    break;
}

await page.locator("//span[text()='Next']").click();
}

const dates= page.locator("//a[@class='ui-state-default']").count();//count is locators method

for (let i = 0; i < dates; i++) {

    const dte = dates.nth(i);

    if (await dte.textContent() === Date) {
        await dte.click();
        break;
    }
}

await page.waitForTimeout(5000);


})