import{test,expect}from"@playwright/test"
import { LoginPage } from "../Pages/LoginPage"
import { Homepage } from "../Pages/Homepage";

test('login page',async({page})=>{
const login=new LoginPage(page);
await login.gotourl();
await login.loginapp('E9592','Jun@2026');
await expect(login.welcome).toHaveText('Welcome ');
await page.waitForTimeout(5000)

const home=new Homepage(page);
await expect(home.welcometext).toHaveText("Welcome Santosh S Kalbate  ");
await home.recentmenu();
await page.screenshot({path:'tests//screensho1//HomePage.png'})

})