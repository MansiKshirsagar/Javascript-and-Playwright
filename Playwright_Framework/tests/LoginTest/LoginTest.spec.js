import { loginPage } from "../../Pages/LoginPage";
import {test,expect} from "../../Fixtures/loginfixture.js"

test("Login test ",async ({page,loginPage})=>{
await loginPage.OpenBrowser();
await loginPage.verifywelcometext();
await loginPage.enterlogindetails("E9592","Sep@2026");
await loginPage.clickonsignin();
await loginPage .verifywelcometextt();
await page.waitForTimeout(7000);


})