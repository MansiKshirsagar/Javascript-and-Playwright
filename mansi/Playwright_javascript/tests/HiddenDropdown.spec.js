import {test,expect}from '@playwright/test'


test("dropdown",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/?utm_source=chatgpt.com");

await page.waitForTimeout(7000);
let colours=await page.locator('#colors');
await colours.selectOption({value:"red"})

//select multiple option dropdown

await page.selectOption('#colors',['Red','White','Green']);
await page.waitForTimeout(5000);

//getting all  multiplae option text

let allcolours=await page.locator('#colors option').all()

for(let option of allcolours)
{
    let textofoptions=await option.textContent();
    console.log(textofoptions);

}

//getting all  multiplae option text 

// let allcolours=await page.locator('#colors option').allTextContents();
// for(const option of allcolours)
// {
//     console.log(option);
// }

//get all numbers/count from dropdown

const Totalcount=await page.locator('#colors option');
 let count=await Totalcount.allTextContents();
console.log(count.length);
await expect (Totalcount).toHaveCount(7);
})