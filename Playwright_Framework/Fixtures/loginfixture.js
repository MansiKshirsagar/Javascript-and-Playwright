import {test as base,expect}from "@playwright/test"
import { loginPage } from "../Pages/LoginPage"
import { BackofficePage } from "../Pages/BackofficePage";
const test=base.extend({

loginPage:async({page},use)=>{
await use(new loginPage(page));
},

backofficePage:async({page},use)=>{
    await use (new BackofficePage(page));
}

})

export {test,expect};