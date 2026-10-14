import { BasePage } from "./BasePage";
import {expect} from"@playwright/test"
export class loginPage extends BasePage{

constructor(page){

    super(page)
    this.page=page
    this.welcomepage=page.locator("//h1[text()='Welcome to Tradebulls']");
    this.username=page.locator("#username");
    this.password= page.locator("#password");
    this.loginbtn=page.locator("//button//h2[text()='Sign in']");
    this.welcomesk=page.locator("//div//p[text()='Santosh S Kalbate']");
    
}

async OpenBrowser(){
    await this.goto("/")
}


async enterlogindetails(username,Password){
    await this.type(this.username,username);
    await this.type(this.password,Password);
     
}
async clickonsignin(){
await this.Click(this.loginbtn);  
}

async verifywelcometext(){
    await expect(this.welcomepage).toHaveText("Welcome to Tradebulls");
}

async verifywelcometextt(){
    await expect(this.welcomesk).toHaveText("Welcome Santosh S Kalbate  ");
}

}