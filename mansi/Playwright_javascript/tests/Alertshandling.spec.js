import {test,expect}from'@playwright/test'



test.skip("Alert   select", async({page})=>
{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com")
await page.waitForTimeout(5000);

//enabled dailog handler
page.on("dailog Alert with OK button",async dailog =>{
expect(dailog.type()).toContain('Alert');
expect(dailog.Message()).toContain("I am a JS Alert");
await dailog.accept();

})

})

test.skip("alert with accept and cancel", async({page})=>
{

await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com")
await page.waitForTimeout(5000);
    page.on('dailog',async dailog=>{

expect(dailog.type()).toContain('Confirm');
expect(dailog.Message()).toContain('I am a JS Confirm')
await dailog.accept();
//await dailog.dismiss();
    })

    await page.getByText('Click for JS Confirm').click();
await page.waitForTimeout(5000);
})

test("alert pop with prompt",async ({page})=>
{
await page.goto("https://the-internet.herokuapp.com/javascript_alerts?utm_source=chatgpt.com")
await page.waitForTimeout(5000);
page.on("dailog",async dailog=>{
expect(dailog.type()).toContain('Prompt')
expect(dailog.Message()).toContain('I am a JS prompt')
await dailog.accept("Hello mansi")
//await dailog.dismiss();
})
  await page.getByText('Click for JS Prompt').click();

  //if we want to check enter value assertion
 // await expect(page.locator("#input")).toHaveValue('hello Mansi');
})


page.on('dailog' ,async dailog=>{

expect(dailog.type()).toContain("");
expect (dailog.name()).toContain();
expect(dailog.Message().toContain());
dailog.accept();


})




