import {Given, When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

import ForgotUsernamePassword from '../../pages/mobile/ForgotUsernamePaswword';
import Yopmail from '../../pages/email/Yopmail';
import MenuNavigationMobile from '../../pages/mobile/MenuNavigationMobile';
import LoginPageMobile from "../../pages/mobile/LoginPageMobile";
import {ICustomWorld} from "../config/custom-world";
import ENV from "../config/ENV";



When('the player click on Cannot login link', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.cannotLogin();
});
When('the player click on Cannot login link Nextbet', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.cannotLoginNextbet();
});
When('the player click on Cannot login link in Zedbet', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.cannotLoginZedbet();
});

Then(/^switching form to Username and the player enter the (.*)$/, async function (email: string) {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    console.log('email in steps: ' + email)
    await forgotUsernamePassword.UserRequest(email);
});

});

Given('the player navigate to yopmail provider', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto("http://www.yopmail.com");
});

Given('the player navigate to inboxkitten email provider', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto("https://www.inboxkitten.com", {timeout:30000});
    await page.bringToFront();
});

When('searching for his Asia player in email box', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.searchUserinYopmail();
});

