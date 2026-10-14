import {test,expect}from'@playwright/test'

test("dropdown select", async({page})=>
{
await page.goto("https://demo.automationtesting.in/Register.html")
await page.waitForTimeout(5000);

/*let year=await page.locator('#yearbox');
await year.scrollIntoViewIfNeeded();
year.selectOption("1997");
await page.waitForTimeout(5000)

let month= await page.locator("//select[@placeholder='Month']");
month.selectOption('November');
await page.waitForTimeout(7000);

let date= await page.locator("#daybox");
date.selectOption({value:"6"})
await page.waitForTimeout(9000); */

//to get count of dropdown

let allyearoption=await page.locator("#yearbox option").allTextContents();
console.log(allyearoption);

let allMonthoption=await page.locator("//select[@placeholder='Month']//option").allTextContents();
console.log(allMonthoption);

let alldateoption=await page.locator("#daybox option").allTextContents();
console.log(alldateoption);


//to get count of all option

let countyes=await page.locator('#yearbox option').count();
console.log(countyes);

})