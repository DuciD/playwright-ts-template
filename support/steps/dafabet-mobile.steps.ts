import {Given, Then, When} from '@cucumber/cucumber';
import { expect} from '@playwright/test';
import MenuNavigationMobile from '../../pages/mobile/MenuNavigationMobile';
import {LoginPageMobile} from '../../pages/mobile/LoginPageMobile';
import ENV from '../config/ENV';
import {ICustomWorld} from '../config/custom-world';
import CasinoSwitcher from "../../pages/mobile/CasinoSwitcher";




Given('the player is at Dafabet mobile site in {string} language', async function (this: ICustomWorld, Language: string) {
    const BASE_URL = ENV.BASE_URL_DAFABET_MOBILE + Language
    const page = this.page!;
    console.log('Base url: ' + BASE_URL);
    await page.goto(BASE_URL, {timeout: 90000});
    await page.bringToFront();
});
Given('the player is at Nextbet mobile site in {string} language', async function (this: ICustomWorld, NBLanguage: string) {
    const page = this.page!;
    const NB_BASE_URL = ENV.BASE_URL_NEXTBET_MOBILE + NBLanguage;
    console.log('Base url: ' + NB_BASE_URL);
    await page.goto(NB_BASE_URL, {timeout: 90000});
});
Given('the player is at Zedbet mobile site in {string} language', async function (this: ICustomWorld, ZBLanguage: string) {
    const page = this.page!;
    const ZEDBET_BASE_URL = ENV.BASE_URL_ZEDBET_MOBILE + ZBLanguage;
    console.log('Base url: ' + ZEDBET_BASE_URL);
    await page.goto(ZEDBET_BASE_URL, {timeout: 90000});
});

// NAVIGATION
When('the player navigating to {string} page', async function (Product: string) {
    this.Product = Product;
    console.log('Product: ' + Product);

    const navigation = new MenuNavigationMobile(this.page);

    console.log('Navigating to page..' + Product);

    await navigation.navigateToMobileMenu(Product);
    console.log('Product: ' + Product)
    console.log('Navigating to page..' + Product);
    if (Product === "Casino Gold") {
        await this.page.goto('https://i' + process.env.NODE_ENV + '-m.elysium-dfbt.com/sc/casino-gold')
    } else {
///----verification of URL's 
        const navigationPromise = this.page.waitForLoadState("networkidle", {timeout: 60000});
        await navigationPromise;

        await navigation.verifyMobileMenu(Product);
    }
});
///LOGIN

When('logs in using MIXEDCASEUSER credential', async function () {
    const login = new LoginPageMobile(this.page);
    const product = this.Product;
    if (product === "Ow Sports") {
        console.log('product in OW: ' + product)
        await login.LoginBtnOwSports();
    } else if (product === 'Dafa Sports') {
        console.log('product DS: ' + product);
        await login.LoginBtnDafaSports();
    } else if (product === "Casino Gold") {
        // await loginPageMobile.LoginButton();
        await login.LoginCasinoGold();
    } else {
        console.log('product: ' + product);
        await login.LoginButton();
        await login.Login();
        await login.LoginUser();
    }
});
When('the player logs in using {string} credentials', async function (user:string) {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginUsernamePassword(user);

});
When('the player logs using dafasports credentials', async function () {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.LoginBtnDafaSports();

});
When('the player navigating to Casino page', async function () {
    const page = this.page!;
    await page.click('//li[@class="icon-thumbnail-item product-box product-casino"]');
});

When('logs in using CASINOCASEUSER credential', async function () {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginCasinoSwicher();
    console.log('player logged in...')
});

When('logs in using LATAMCASEUSER credential', async function () {
    const product = this.product;
    const loginPageMobile = new LoginPageMobile(this.page);
    if (product === 'Dafa Sports') {
        console.log('product: ' + product);
        await loginPageMobile.LoginBtnDafaSports();
    }

    console.log('product: ' + product);
    await loginPageMobile.LoginButton();
    await loginPageMobile.LoginLatam();

});
When('logs in using NEXTBETCASEUSER credential', async function () {
    const product = this.Product;
    const loginPageMobile = new LoginPageMobile(this.page);
    if (product === 'Sportsbook') {
        console.log('product: ' + product);
        await loginPageMobile.LoginNextbetSB();
    } else {

        console.log('product: ' + product);
        await loginPageMobile.LoginButtonNextbet();
        await loginPageMobile.LoginNextbet();
    }
});
When('logs in using ZEDBETCASEUSER credential', async function () {
    const product = this.Product;
    const loginPageMobile = new LoginPageMobile(this.page);
    if (product === 'SportsbookZB') {
        console.log('product for ZB Sportsbook: ' + product);
        await loginPageMobile.LoginZedbetSB();
    } else {

        console.log('product: ' + product);
        await loginPageMobile.LoginButtonZedbet();
        await loginPageMobile.LoginZedbet();
    }

});
Then('Dafabet mobilepage is successfully displayed', async function () {
    const login = new LoginPageMobile(this.page)
    await login.isLoggedIn();
});
Then('Sportsbook mobilepage is successfully displayed', async function () {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.isLoggedInNextbetSB();
});
Then('Zedbet mobilepage is successfully displayed', async function () {
    const product = this.Product;
    const loginPageMobile = new LoginPageMobile(this.page);
    if (product === 'SportsbookZB') {
        await loginPageMobile.isLoggedInSportsbook();
    }
    await loginPageMobile.isLoggedIn();

});

///LOGOUT
When('the player logs out in current page', async function () {
    const login = new LoginPageMobile(this.page);
    await login.Logout();
});
When('the player logs out in current SB page', async function () {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.logoutSportsbook();
});

Then('the player has logged out from current SB page', async function () {
    const loginPageMobile = new LoginPageMobile(this.page);
    await loginPageMobile.isLoggedOutSportsbook();
});

Then('the player has logged out from current page', async function () {
    const login = new LoginPageMobile(this.page);
    const Product = this.Product;
    if (Product === 'Casino Gold') {
        login.isLoggedOutCG;
    } else if (Product === 'SportsbookZB') {
        await login.isLoggedOutSB();
    }
    await login.isLoggedOut();
});
Then(/^the (.*) URL should end with (.*)$/, async function (casino: string, expectedEnding: string) {
    const currentUrl = await this.page.url();
    const casinoSwitcher = new CasinoSwitcher(this.page);
    const navigationPromise = this.page.waitForLoadState("domcontentloaded", {timeout: 60000});

    console.log('Current URL: ' + currentUrl);
    console.log('Casino product: ' + casino + '; ending expected: ' + expectedEnding)
    if (expectedEnding === 'casino-gold' && currentUrl.endsWith('/casino')) {
        console.log('Current URL: ' + currentUrl);
        console.log('Expected: ' + expectedEnding + '; switching to product...');
        await casinoSwitcher.switchToCasinoGold();
        await navigationPromise;
        await this.page.waitForFunction(`window.location.href.endsWith("${expectedEnding}")`);
        const casinogoldUrl = await this.page.evaluate(() => window.location.href);
        //expect(currentUrl).to.include(expectedEnding);
        console.log('New URL: ' + casinogoldUrl);
        await expect(casinogoldUrl).toContain('casino-gold');

    } else if (expectedEnding === 'casino' && currentUrl.endsWith('casino-gold')) {
        console.log('Current URL: ' + currentUrl);
        console.log('Expected: ' + expectedEnding + '; switching to product...');
        await casinoSwitcher.switchToCasino();
        await navigationPromise;
        const casinoURL = await this.page.url();
        console.log('New URL: ' + casinoURL);
        expect(casinoURL).toContain('casino');
    } else {
        console.log('Product = ' + casino + ', ending = ' + expectedEnding + '----correct ending!');
    }


});
When('the player switch back to Casino', async function () {

    const casinoSwitcher = new CasinoSwitcher(this.page);
    const currentUrl = await this.page.url();
    const isCasino = expect(currentUrl).toContain('/casino');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!isCasino) {
       await casinoSwitcher.switchToCasino();
    } else {
        console.log('Casino page is displayed');
    }
});

