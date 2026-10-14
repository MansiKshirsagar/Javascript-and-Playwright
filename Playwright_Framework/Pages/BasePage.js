export class BasePage{

constructor(page)
{
this.page=page;
}

 async goto(path = '/') {
        await this.page.goto(path, {
            waitUntil: 'domcontentloaded',
            timeout: 60000
        });
    }

async Click(locator) {
    await locator.click();
}

async type(locator,text){

    await locator.fill(text);
}

async pressKeyOnElement(locator, key) {
    await locator.press(key);

}

}