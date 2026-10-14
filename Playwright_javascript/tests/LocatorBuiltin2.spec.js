
import{test,expect}from"@playwright/test"


/*test("Built in locator - Getbyrole",async({page})=>{
// test.setTimeout(5000);
await page.goto("https://uat-beta.tradebulls.in/");
await page.waitForTimeout(5000);
//get title
const gettitle= await page.title();
console.log("Page Title = " + gettitle);

//get url
const geturl=await page.url();
console.log("page URL = "+ geturl);
await page.waitForTimeout(5000);

//page reload
await page.reload();
await page.waitForTimeout(5000);

//page.click 
await page.getByRole("link",{name:'Login'}).click();
await page.waitForTimeout(5000);

//go back from page
await page.goBack();
await page.waitForTimeout(6000);

//go forward from page
await page.goForward();
await page.waitForTimeout(5000);

//Type give input  one by one char

await page.getByRole("textbox",{name:"Enter your Phone No."}).type("9284062419");
await page.waitForTimeout(5000);



})*/

test('handle radio button',async ({page})=>{

    await page.goto('https://qaplayground.com/practice/radio-checkbox?utm_source=chatgpt.com');

    await page.waitForTimeout(5000)
    const checkbox =await page.getByRole("checkbox",{name:"I accept the terms and conditions"});
    console.log(await checkbox.isChecked());
    await page.waitForTimeout(5000)
    await checkbox.check();
    await page.waitForTimeout(5000)
    console.log(await checkbox.isChecked());
    page.getByRole()
})

test ("rolebylocator - textbox",async({page})=>{
await page.goto('https://sauce-demo.myshopify.com/account/login');
await page.getByRole('textbox',{name:"Email Address"}).fill('masni43@getMaxListeners.com');
await page.waitForTimeout(5000);
})
test ("rolebylocator - link",async({page})=>{
await page.goto('https://sauce-demo.myshopify.com/account/login');
await page.waitForTimeout(5000);
await page.getByRole('link',{name:"Home"}).click();
await page.waitForTimeout(9000);
})
test("rolebylocator - ",async({page})=>{
await page.goto('https://sauce-demo.myshopify.com/account/login');
await page.waitForTimeout(5000);
await page.getByRole('link',{name:"Log In"}).click();
await page.waitForTimeout(9000);
})

test("rolebyalt -  ",async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.waitForTimeout(5000);
let altimg =await page.getByAltText("company-branding");
console.log(altimg.isVisible);
await page.waitForTimeout(9000);
})

test("getbytext -  ",async({page})=>{
await page.goto('https://uat-ent.tradebulls.in/login');
await page.waitForTimeout(5000);
let text =await page.getByText("Welcome to Tradebulls");
console.log(await text.isVisible());
await page.waitForTimeout(9000);
})

test("getbyplaceholder -  ",async({page})=>{
await page.goto('https://uat-ent.tradebulls.in/login');
await page.waitForTimeout(5000);
await page.getByPlaceholder("Enter your code").fill("E9592");
await page.waitForTimeout(9000);
})



test .only('test', async ({ page }) => {
  await page.goto('https://uat-ent.tradebulls.in/login');
  await page.locator('.jss11').click();
  await page.getByRole('textbox', { name: 'User Code' }).fill('E9592');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Jun@2026');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByTestId('CloseSharpIcon').click();
  let loginname=await page.getByText('Welcome Santosh S Kalbate');
   await expect (loginname).toBeVisible();
});