import { test, expect } from "../../Fixtures/loginfixture.js";
test.only("client change request", async ({ page, loginPage, backofficePage }) => {

  await loginPage.OpenBrowser();
  await loginPage.verifywelcometext();
  await loginPage.enterlogindetails("E9592", "Sep@2026");
  await loginPage.clickonsignin();
  await loginPage.verifywelcometextt();

  await backofficePage.clickBackOffice();                                             
  await backofficePage.clickSearchMenu();
  await backofficePage.enterMenuName("client");
  await backofficePage.pressEnterOnSearch();
  await backofficePage.clickProcessMenu();
  await backofficePage.clickClientChangeRequest();
  await backofficePage.verifypagetitleofbackoffice();
  await page.waitForTimeout(7000);

});
