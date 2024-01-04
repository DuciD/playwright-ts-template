import {Given, When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

import ForgotUsernamePassword from '../../pages/mobile/ForgotUsernamePaswword';
import Yopmail from '../../pages/email/Yopmail';
import MenuNavigationMobile from '../../pages/mobile/MenuNavigationMobile';
import LoginPageMobile from "../../pages/mobile/LoginPageMobile";
import {ICustomWorld} from "../config/custom-world";
import ENV from "../config/ENV";


Given('the player is at {string} mobile site in {string} language', async function (this: ICustomWorld, Portal: string, Language: string) {
    const page = this.page!;
    const DAFA_BASE_URL = ENV.BASE_URL_DAFABET_MOBILE + Language;
    const NB_BASE_URL = ENV.BASE_URL_NEXTBET_MOBILE + Language;
    const ZB_BASE_URL = ENV.BASE_URL_ZEDBET_MOBILE + Language;
    switch (Portal) {
        case "Dafabet":
            return page.goto(DAFA_BASE_URL, {timeout: 90000});
        case "Nextbet":
            console.log('Base url: ' + NB_BASE_URL);
            return page.goto(NB_BASE_URL, {timeout: 90000});
        case "Zedbet":
            return page.goto(ZB_BASE_URL, {timeout: 90000})
        default:
            return page.goto(DAFA_BASE_URL, {timeout: 90000});
    }
});
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
Then('a form is displayed and the player enter the details', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.AsiaRequest();
});
Then('a form is displayed and the player enter Latam details', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.LatamRequest();
});
Then('a form is displayed and the player enter Nextbet details', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.NextbetRequest();
});
Then('a form is displayed and the player enter Zedbet details', async function () {
    const forgotUsernamePassword = new ForgotUsernamePassword(this.page);
    await forgotUsernamePassword.ZedbetRequest();
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
When('searching for his Latam player in email box', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.searchLatamUserinYopmail();
});
When('searching for his Nextbet player in email box', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.searchNextbetUserinYopmail();
});
When('searching for his Zedbet player in email box', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.searchZedbetUserinYopmail();
});
When(/^enter his (.*) name in email box$/, async function (user) {
    const yopmail = new Yopmail(this.page);
    await yopmail.searchUserInYopmailAll(user);

});
When('click on reset pasword button and enter details', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.clickResetPassword();
});
When('click on Latam reset pasword button and enter details', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.clickLatamResetPassword();
});
Then('a password is changed successfully', async function () {
    const yopmail = new Yopmail(this.page);
    await yopmail.checkPasswordReset();
});

//-----------Login -----------------------------------------//
When('logs in using FORGOTPASSWORDASIA credential', async function () {
    const loginPageMobile = new LoginPageMobile(this.page)
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginForgotPasswordAsia();
});

When('logs in using FORGOTPASSWORDLATAM credential', async function () {

    const loginPageMobile = new LoginPageMobile(this.page)
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginForgotPasswordLatam();
});
When('logs in using FORGOTPASSWORDNEXTBET credential', async function () {

    const loginPageMobile = new LoginPageMobile(this.page)
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginForgotPasswordNextbet();
});
When('logs in using FORGOTPASSWORDZEDBET credential', async function () {

    const loginPageMobile = new LoginPageMobile(this.page)
    await loginPageMobile.LoginButtonZedbet();
    await loginPageMobile.LoginForgotPasswordZedbet();
});

When('click on myAccount button and change password', async function () {
    const yopmail = new Yopmail(this.page);
    const menuNavigationMobile = new MenuNavigationMobile(this.page);
    await menuNavigationMobile.openHumburgerMenu();
    await menuNavigationMobile.openMyAccount();
    await menuNavigationMobile.changePasswordButton();
    await yopmail.changePasswordInMyAccount();
});
When('click on Zedbet myAccount button and change password', async function () {
    const yopmail = new Yopmail(this.page);
    const menuNavigationMobile = new MenuNavigationMobile(this.page);
    await menuNavigationMobile.openHumburgerMenu();
    await menuNavigationMobile.openMyAccountZedbet();
    await menuNavigationMobile.changePasswordButton();
    await yopmail.changePasswordInMyAccount();
});
Then(/^(.*) matches the user read from Email$/, async function (username) {
    const yopmail = new Yopmail(this.page);
    console.log("username in cucumber: " + username);

    const usernameFromYopmail = await yopmail.setUsername(username);
    console.log("username in email: " + usernameFromYopmail);
    expect(usernameFromYopmail).toContain(username);
});


Then('password has been changed successfully', async () => {

});