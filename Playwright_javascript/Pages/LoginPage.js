exports.LoginPage = class Loginpage{


constructor(page)
{
this.page=page;
this.username='#username';
this.password='#password';
this.loginbtn= page.getByText('Sign in');
this.welcome=page.locator("//p[text()='Welcome ' ]");

this.nameclick="//div[text()='Santosh S']";
this.logout="//span[contains(text(),'Logout')]";
}

async gotourl()
{
    await this.page.goto("https://uat-ent.tradebulls.in/login");
}

async loginapp(usernameenter,passwordenter)
{

await this.page.locator(this.username).fill(usernameenter);
await this.page.locator(this.password).fill(passwordenter);
await this.loginbtn.click();
}


}