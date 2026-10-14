exports.Homepage=class Homepage{


constructor(page){

this.welcometext=page.locator("//p[text()='Welcome ' ]");
this.allelement=page.locator("//ul//li//a//span");


}
async welcometextverify()
{
}

async recentmenu() {
  const count = await this.allelement.count();
   let alltext = await this.allelement.allTextContents();
 for(let i=0;i<count;i++)
 {
const list=await this.allelement.nth(i);
let menu=await list.textContent();
console.log(await menu);

}



}
}