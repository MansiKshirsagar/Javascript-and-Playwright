import {test,expect}from'@playwright/test'
test("dropdown select", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.waitForTimeout(5000);

//console.log("select by value")
let countrydropdown=await page.locator('#country');
await countrydropdown.scrollIntoViewIfNeeded();
await countrydropdown.selectOption("canada");
await expect (countrydropdown).toHaveValue("canada")
await page.waitForTimeout(3000);

//console.log("select by Lable")

let countrydropdownn=await page.locator('#country')
countrydropdownn.selectOption({lable:"United Kingdom"});
await page.waitForTimeout(3000);

//console.log("select by index")
let countrydropdownnn= await page.locator('#country');
countrydropdownnn.selectOption({index:5})
await page.waitForTimeout(3000);

//verfiy input is visible or not

console.log(await countrydropdown.isVisible());
console.log(await countrydropdownn.isVisible());
console.log(await countrydropdownnn.isVisible());

//get options from dropdown

// let alloption=await page. $$('#country option');
// for(let option of alloption){

// let textofoption=await option.textContent();
// console.log(textofoption)
// }

//count of all options
let countofoption=await page.locator('#country option').count();
console.log(countofoption);

//Assertion for count
let countofoption1=await page.locator('#country option');
await expect(countofoption1).toHaveCount(10);
})