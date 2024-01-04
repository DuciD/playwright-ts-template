import {assert} from "chai";
import {Page, expect} from '@playwright/test'
//import  ControlBase  from '../common/ControlBase';
import ENV from '../../support/config/ENV';


export default class LoginPageMobile {
    //private controlBase: ControlBase;
    private page: Page;
    private username: string;
    private password: string;
    private usernameRMBPlayer: string;
    private passwordLowerEnv: string;
    private usernameDafa: string;
    private usernameZedbet: string;
    private usernameCasino: string;
    private forgotPasswordAsiaUser: string;
    private forgotPasswordLatamUser: string;
    private forgotPasswordNextbetUser: string;
    private forgotPasswordZedbetUser: string;
    private usernameLatam: string;
    private usernameNextbet: string;

    private locators = {
        //LOGIN_BUTTON: '[class="login-trigger mobile-action-button-login-now"]', //new locator
        LOGIN_BUTTON: '[class="login-trigger btn btn-yellow btn-small btn-mobile-login"]', //login-trigger btn btn-yellow btn-small btn-mobile-login
        LOGIN_BUTTON_NEXTBET: '[class="login-trigger btn btn-yellow btn-small btn-mobile-login"]',
        LOGIN_BUTTON_OW: '//div[@class="appbar"]/div[2]/div[1]',
        // LOGIN_BUTTON_DAFA: '[class="header-button u-pull-left login ml15 button button-secondary mr5"]',
        LOGIN_BTN_ZEDBET: '[class="login-trigger btn btn-red btn-small btn-mobile-login"]',
        LOGIN_BTN_ZEDBET_SB: '[class="btn btn-gray btn-small login-submit"]',
        LOGIN_CASINOGOLD: '[data-product-login-via="mobile-casino"]',
        USERNAME_SPORTS: '[placeholder="Username"]',
        USERNAME_ZEDBET: '[name="username"]',
        USERNAME: '[class="login-field-username input-block-level"]',
        LOGIN_BTN_SPORTSBOOK: '[class="header-button u-pull-left login ml15 button button-secondary mr5"]',
        USERNAME_NEXTBET_SB: '#login_username',
        PASSWORD: '[type="password"]',
        LOGIN: '[type="submit"]',
        BALANCE: '[class="account-balance-amount"]',
        BALANCE_SB: '[class="balance"]',
        HAMBURGER_MENU: '[class="mobile-menu-icon"]',
        LOGOUT: '[class="icon-thumbnail-link menu-item-internal btn-logout quicklinks-logout"]',
        // CASINO_CLASSIC: '[class="icon-thumbnail-link product-casino"]',
        USERNAME_VERIFICATION_SPORTSBOOK: '[class="my-profile-link disable"]',
        MY_ACCOUNT_ZB_SPORTSBOOK: '#icon-myaccount',
        LOGOUT_DP: '//div[@class="tooltip-content text-center"]//ul//li[4]',
        LOGOUT_SB_NB_MYACCOUNT: '[class="header-button account"]',
        LOGOUT_SB_NB: '[class="logout-section"]',

    }

    constructor(page: Page) {
        this.page = page;
        // this.controlBase = new ControlBase(page);
        this.username = ENV.LOGIN_USER_ASIA as string;
        this.password = ENV.PASSWORD1;
        this.usernameRMBPlayer = ENV.SUCCESSFUL_WITHDRAWAL;
        this.passwordLowerEnv = ENV.PASSWORD;
        this.usernameDafa = ENV.LOGIN_DAFA;
        this.usernameZedbet = ENV.LOGIN_USER_ZEDBET;
        this.usernameLatam = ENV.LOGIN_USER_LATAM;
        this.usernameNextbet = ENV.LOGIN_USER_NEXTBET;
        this.usernameCasino = ENV.CASINO_SWITCHER;
        this.forgotPasswordAsiaUser = ENV.ASIA_FP_USER;
        this.forgotPasswordLatamUser = ENV.LATAM_FP_USER;
        this.forgotPasswordNextbetUser = ENV.NEXTBET_FP_USER;
        this.forgotPasswordZedbetUser = ENV.ZEDBET_FP_USER;


    }

    async LoginButton() {
        await this.page.click(this.locators.LOGIN_BUTTON);
    }
    async LoginButtonNextbet() {
        await this.page.click(this.locators.LOGIN_BUTTON_NEXTBET);
    }

    async LoginButtonZedbet() {
        await this.page.click(this.locators.LOGIN_BTN_ZEDBET);
    }

    async Login() {
        await this.page.type(this.locators.USERNAME, this.username);
        await this.page.type(this.locators.PASSWORD, this.password);
    }

    async LoginUser() {
        await this.page.waitForSelector(this.locators.LOGIN);
        const loginButton = await this.page.$(this.locators.LOGIN);
        if (loginButton && (await loginButton.isVisible()) && (await loginButton.isEnabled())) {
            await loginButton.click();
            console.log("Login button clicked.");
        } else {
            console.log("Login button is not visible or not enabled.");
        }
    }
    async LoginUsernamePassword(user:string ) {
        await this.page.type(this.locators.USERNAME, user);
        await this.page.type(this.locators.PASSWORD, this.password);
        console.log('before login btn click');
        await this.page.click(this.locators.LOGIN);
        console.log('after login btn click');
    }

    async LoginCasinoGold() {
        await this.page.type(this.locators.USERNAME, this.usernameRMBPlayer);
        await this.page.type(this.locators.PASSWORD, this.password);
        console.log('before login btn click');
        await this.page.click(this.locators.LOGIN);
        console.log('after login btn click');
    }

    async LoginBtnOwSports() {
        await this.page.click(this.locators.LOGIN_BUTTON_OW);
        const usernameSports = this.page.locator(this.locators.USERNAME_SPORTS);
        await expect(usernameSports).toBeVisible();
        console.log('username field visible');
        await this.page.focus(this.locators.USERNAME_SPORTS);
        await this.page.type(this.locators.USERNAME, this.username);
        await this.page.type(this.locators.PASSWORD, this.password);
        await this.page.focus(this.locators.LOGIN);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginBtnDafaSports() {
        await this.page.click(this.locators.LOGIN_BTN_SPORTSBOOK);
        await this.page.type(this.locators.USERNAME_SPORTS, this.usernameDafa);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginCasinoSwicher() {
        await this.page.type(this.locators.USERNAME, this.usernameCasino);
        await this.page.type(this.locators.PASSWORD, this.password);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginLatam() {
        await this.page.type(this.locators.USERNAME, this.usernameLatam);
        await this.page.type(this.locators.PASSWORD, this.password);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginNextbet() {
        await this.page.type(this.locators.USERNAME, this.usernameNextbet);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginNextbetSB() {
        await this.page.click(this.locators.LOGIN_BTN_SPORTSBOOK);
        await this.page.type(this.locators.USERNAME_NEXTBET_SB, this.usernameNextbet);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginZedbet() {
        await this.page.type(this.locators.USERNAME, this.usernameZedbet);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginZedbetSB() {
        await this.page.type(this.locators.USERNAME_ZEDBET, this.usernameZedbet);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN_BTN_ZEDBET_SB);
    }

    //---------------------------------LOGIN FORGOT PASSWORD------------------//
    async LoginForgotPasswordAsia() {
        await this.page.pause();
        await this.page.type(this.locators.USERNAME, this.forgotPasswordAsiaUser);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginForgotPasswordLatam() {
        await this.page.type(this.locators.USERNAME, this.forgotPasswordLatamUser);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginForgotPasswordNextbet() {
        await this.page.type(this.locators.USERNAME, this.forgotPasswordNextbetUser);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    async LoginForgotPasswordZedbet() {
        await this.page.type(this.locators.USERNAME, this.forgotPasswordZedbetUser);
        await this.page.type(this.locators.PASSWORD, this.passwordLowerEnv);
        await this.page.click(this.locators.LOGIN);
    }

    //-----------------------------Is LogedIn---------------------------------//
    async isLoggedIn() {
        const balanceIcon = this.page.locator(this.locators.BALANCE);
        await expect(balanceIcon).toBeVisible({timeout: 40000});
        console.log('Player has loggedin and balance visible')
    }

    async isLoggedInNextbetSB() {
        const balanceSB = this.page.locator(this.locators.BALANCE_SB)
        await expect(balanceSB).toBeVisible({timeout: 25000});
        console.log('Player has loggedin and balance visible')
    }

    async isLoggedInSportsbook() {
        const element = await this.page.locator(this.locators.USERNAME_VERIFICATION_SPORTSBOOK).first();
        const elementText = await element.innerText();
        assert.include(elementText, this.usernameZedbet);
        // expect(locators.USERNAME_VERIFICATION_SPORTSBOOK).to.include.text(usernameZedbet);
        console.log('Player has loggedin ' + this.usernameZedbet)
    }

    //------------------------------------LOGOUT--------------------------------------------//
    async Logout() {
        await this.page.click(this.locators.HAMBURGER_MENU);
        await this.page.click(this.locators.LOGOUT);
    }

    async LogoutDesktopPreview() {
        await this.page.click(this.locators.MY_ACCOUNT_ZB_SPORTSBOOK);
        await this.page.click(this.locators.LOGOUT_DP);
    }

    async logoutSportsbook() {
        await this.page.click(this.locators.LOGOUT_SB_NB_MYACCOUNT),
            await this.page.click(this.locators.LOGOUT_SB_NB);
    }

    async isLoggedOut() {
        const loggedOut = this.page.locator(this.locators.LOGIN_BUTTON);
        await expect(loggedOut).toBeVisible({timeout: 15000});
    }

    async isLoggedOutCG() {
        const isCGoff = this.page.locator(this.locators.LOGIN_CASINOGOLD);
        await expect(isCGoff).toBeVisible();
    }

    async isLoggedOutSB() {
        const isSBOff = this.page.locator(this.locators.LOGIN_BTN_ZEDBET_SB);
        await expect(isSBOff).toBeVisible();
    }

    async isLoggedOutSportsbook() {
        const isSportsOff = this.page.locator(this.locators.LOGIN_BUTTON);
        await expect(isSportsOff).toBeVisible({timeout:15000});
    }
}

export {LoginPageMobile};
