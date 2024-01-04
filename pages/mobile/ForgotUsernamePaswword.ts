import {Page} from '@playwright/test';
import ENV from '../../support/config/ENV'


const AsiaUsername: string = ENV.ASIA_FP_USER || ''; // Provide a default value if it's undefined
const LatamUsername: string = ENV.LATAM_FP_USER || '';
const NextbetUsername: string = ENV.NEXTBET_FP_USER || '';
const ZedbetUsername: string = ENV.ZEDBET_FP_USER || '';
//const passwordLE: string = ENV.PASSWORD || '';
const forgotPasswordAsiaEmail: string = ENV.FORGOTPASSWORDASIA_EMAIL || '';
const forgotPasswordLatamEmail: string = ENV.FORGOTPASSWORDLATAM_EMAIL || '';
const forgotPasswordNextbetEmail: string = ENV.FORGOTPASSWORDNEXTBET_EMAIL || '';
const forgotPasswordZedbetEmail: string = ENV.FORGOTPASSWORDZEDBET_EMAIL || '';

export default class ForgotUsernamePassword {
    private page: Page;
    private locators = {
       // LOGIN_BUTTON: '[class="login-trigger mobile-action-button-login-now"]', //new button after deployment
        LOGIN_BUTTON: '[class="login-trigger btn btn-yellow btn-small btn-mobile-login"]',
        LOGIN_BUTTON_NEXTBET: '[class="login-trigger btn btn-yellow btn-small btn-mobile-login"]',
        LOGIN_BUTTON_ZEDBET: '[class="login-trigger btn btn-red btn-small btn-mobile-login"]',
        CANNOT_LOGIN: '[class="login-help-link"]',
        FP_USERNAME: '#ForgotPasswordForm_username',
        FP_EMAIL: '#ForgotPasswordForm_email',
        FU_EMAIL: '#ForgotUsernameForm_email',
        SUBMIT_BUTTON: '#ForgotPasswordForm_submit',
        USERNAME_SUBMIT_BUTTON: '#ForgotUsernameForm_submit',
        FORGOT_USERNAME: '//ul[@class="tab-menu"]//li[2]',
    };

    constructor(page: Page) {
        this.page = page;

    }

    async cannotLogin() {
        await this.page.click(this.locators.LOGIN_BUTTON);
        await this.page.click(this.locators.CANNOT_LOGIN);
    }
    async cannotLoginNextbet() {
        await this.page.click(this.locators.LOGIN_BUTTON_NEXTBET);
        await this.page.click(this.locators.CANNOT_LOGIN);
    }

    async cannotLoginZedbet() {
        await this.page.click(this.locators.LOGIN_BUTTON_ZEDBET);
        await this.page.click(this.locators.CANNOT_LOGIN);
    }

    async UserRequest(email: string) {
        await this.page.click(this.locators.FORGOT_USERNAME);
        console.log('email in class: ' + email);
        await this.page.type(this.locators.FU_EMAIL, email);
        await this.page.click(this.locators.USERNAME_SUBMIT_BUTTON);
    }

    async AsiaRequest() {
        await this.page.type(this.locators.FP_USERNAME, AsiaUsername);
        await this.page.type(this.locators.FP_EMAIL, forgotPasswordAsiaEmail);
        await this.page.click(this.locators.SUBMIT_BUTTON);
    }

    async LatamRequest() {
        await this.page.type(this.locators.FP_USERNAME, LatamUsername);
        await this.page.type(this.locators.FP_EMAIL, forgotPasswordLatamEmail);
        await this.page.click(this.locators.SUBMIT_BUTTON);
    }

    async NextbetRequest() {
        await this.page.type(this.locators.FP_USERNAME, NextbetUsername);
        await this.page.type(this.locators.FP_EMAIL, forgotPasswordNextbetEmail);
        await this.page.click(this.locators.SUBMIT_BUTTON);
    }

    async ZedbetRequest() {
        await this.page.type(this.locators.FP_USERNAME, ZedbetUsername);
        await this.page.type(this.locators.FP_EMAIL, forgotPasswordZedbetEmail);
        await this.page.keyboard.press('Enter');
        //await page.click(locators.SUBMIT_BUTTON); //first click actually closes drop menu
    }

    async navigateToYopmail() {
        await this.page.goto("http://www.yopmail.com");
    }

    async searchUserinYopmail() {

    }
}


