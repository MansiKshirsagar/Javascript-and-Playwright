import { BasePage } from "./BasePage.js"
import { expect } from "@playwright/test";

export class BackofficePage extends BasePage{

constructor(page){

    super(page)
    this.page=page
    this.backOffice = page.locator("//span[text()='BackOffice']");
    this.searchmenu=page.locator("#search-menu-input");
    this.pecoessmenu=page.locator("#boprocess");
    this.clientrequest=page.locator("#clientEnquiryEdit");
    this.clientpagetitle=page.locator("//div[text()='Client Change Request']");
}

async clickBackOffice() {
    await this.backOffice.click();
}

async clickSearchMenu() {
    await this.searchmenu.click();
}

async enterMenuName(menuname) {
    await this.type(this.searchmenu, menuname);
}

async pressEnterOnSearch() {
    await this.pressKeyOnElement(this.searchmenu, 'Enter');
}

async clickProcessMenu() {
    await this.Click(this.pecoessmenu);
}

async clickClientChangeRequest() {
    await this.Click(this.clientrequest);
}

async verifypagetitleofbackoffice()
{
    await expect(this.clientpagetitle).toHaveText("Client Change Request");
}

}