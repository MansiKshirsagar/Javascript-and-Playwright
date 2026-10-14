import {test,expect}from"@playwright/test"

test("date picker 1",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#txtDate").click();

await page.waitForTimeout(5000);

await page.locator(".ui-datepicker-month").click();

const Months= page.locator("//select[@class='ui-datepicker-month']//option").count();

for (let i=0; i<Months;i++)
{
    let mnth=Months.nth(i);
    const textmnth=mnth.textcontent();

if(textmnth=="Nov")
{
    await textmnth.click()
    break;
}

}
const Years=page.$$("//select[@class='ui-datepicker-year']//option").length;// length is array method and $$ return array

for(let i=0; i<Years; i++)
{
const textyr=Years.nth(i);
 const yearselect=textyr.textcontent();
 if(yearselect=='2027')
 {
    await yearselect.click()
    break;
 }
}

const dates= page.locator("//td[@class=' ui-datepicker-week-end ']//a").count();

for(let i=0; i<dates; i++)
{

    const dte=dates.nth(i);
const seldate=dte.textcontent()

if(seldate=="6")
{
await seldate.click()
break;
}
}
 await page.waitForTimeout(7000);


})