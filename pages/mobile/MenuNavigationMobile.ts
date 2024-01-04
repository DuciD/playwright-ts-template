import {expect} from 'chai';
import {Page} from '@playwright/test';

import ControlBase from '../common/ControlBase';


export default class MenuNavigationMobile {


    HAMBURGER_MENU = '[class="mobile-menu-icon"]';
    DAFA = '//h1[@class=\'logo en\']//a[2]';
    DAFASPORTS = '[class="icon-thumbnail-link product-dafasports product-sports-df"]';
    DAFA_ZEDBET_MOBILE = '[data-product-instance-id="sports"]';
    OW_SPORTS = '[class="icon-thumbnail-link product-owsports product-sports"]';
    CASINO_CLASSIC = '[class="icon-thumbnail-link product-casino"]';
    LIVE_DEALER = '[class="icon-thumbnail-link product-live-dealer"]';
    GAMES = '[class="icon-thumbnail-link product-games"]';
    ARCADE = '[class="icon-thumbnail-link product-arcade"]';
    LOTTERY = '[class="icon-thumbnail-link product-lottery"]';
    VIRTUALS = '[class="icon-thumbnail-link product-virtuals menu-item-internal"]';
    PTPLUS = '[class="icon-thumbnail-link product-ptplus"]';
    SLOTS = '[class="icon-thumbnail-link product-slots"]';
    MY_ACCOUNT_BUTTON = '[class="btn btn-small btn-yellow"]';
    MY_ACCOUNT_ZEDBET = '[class="btn btn-small btn-red"]';
    CHANGE_PASSWORD_BUTTON = '//div[@class="tab"]//ul//li[2]';
    CASHIER_BUTTON = '[class="btn btn-small btn-yellow btn-cashier"]';
    POP_UP = '[class="announcement--container scrollbot"]';
    CLOSE_POP_UP = '"#announcementLightbox span"';
    private controlBase: ControlBase;
    private page: Page;

    constructor(page: Page) {
        this.page = page; // Assign the 'page' object
        this.controlBase = new ControlBase(page);

    }

    async openHumburgerMenu() {
        await this.page.click(this.HAMBURGER_MENU);
    }

    async openMyAccount() {
        await this.page.click(this.MY_ACCOUNT_BUTTON);
    }

    async openMyAccountZedbet() {
        await this.page.click(this.MY_ACCOUNT_ZEDBET);
    }

    async changePasswordButton() {
        await this.page.click(this.CHANGE_PASSWORD_BUTTON);
    }
    async openCashier(){
        const controlBase = new ControlBase(this.page);
        const [newPage] = await Promise.all([
            await controlBase.waitForPageEvent(),
            await this.page.click(this.CASHIER_BUTTON)
        ]);
        await newPage.waitForLoadState();
    }


    async closePopUp() {
        //if (await this.page.locator('[class="announcement--container scrollbot"]').isVisible()){
        if (await this.page.isVisible(this.POP_UP)) {
            await this.page.click(this.CLOSE_POP_UP);
        } else {
            console.log('Continuing - no popups displayed...');
        }
    }

    //---------------------------------------navigation to specific menu under mobile---------------------//
    async navigateToMobileMenu(product: string) {
        // await this.page.closePopUp();
        await this.page.click(this.HAMBURGER_MENU);
        switch (product) {
            case "Dafabet":
                return this.page.reload();
            case "Entry":
                return this.page.reload();
            case "Dafa Sports":
                return this.page.click(this.DAFASPORTS);
            case "Sportsbook":
                const sportsbookURL = 'https://mobile-nb-' + process.env.NODE_ENV + '.elysium-dfbt.com/m/' + process.env.LOCALE + '/live/sport/';
                console.log('checking from SB menu link: ' + sportsbookURL);
                return this.page.goto(sportsbookURL);
            case "SportsbookZB":
                return this.page.click(this.DAFA_ZEDBET_MOBILE);
            case "Ow Sports":
                return this.page.click(this.OW_SPORTS);
            case "Casino":
                return this.page.click(this.CASINO_CLASSIC);
            case "Live Dealer":
                return this.page.click(this.LIVE_DEALER);
            case "Games":
                return this.page.click(this.GAMES);
            case "Arcade":
                return this.page.click(this.ARCADE);
            case "PT+":
                return this.page.click(this.PTPLUS);
            case "Lottery":
                return this.page.click(this.LOTTERY);
            case "Virtuals":
                return this.page.click(this.VIRTUALS);
            case "Slots":
                return this.page.click(this.SLOTS);
        }
    }

    //----------------------------------verifying the Menu---------------------------------///
    async verifyMobileMenu(Product: string) {
        var currentURL = this.page.url();
        console.log('read URL:...' + currentURL);
        switch (Product) {
            case "Dafabet":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.include("/en");
            case "Entry":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/");
            case "OW Sports":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/owsports");
            case "Dafa Sports":
                await this.controlBase.waitForNavigationURL(currentURL);
                return await expect(currentURL).to.include("als-");

            case "Sportsbook":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.include("/sport");

            case "SportsbookZB":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.include("/sport");
            case "Slots":
                await this.controlBase.waitForNavigationURL(currentURL);
                return await expect(currentURL).to.include("/slots");
            case "Casino":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/casino");
            case "Casino Gold":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("casino-gold");
            case "Live Dealer":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/live-dealer");
            case "Games":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/games");
            case "Arcade":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/arcade");
            case "PT+":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/ptplus");
            case "Lottery":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/lottery");
            case "Virtuals":
                await this.controlBase.waitForNavigationURL(currentURL);
                return expect(currentURL).to.contain("/virtuals");
            default:
                // Handle unknown or unexpected cases
                throw new Error(`Unhandled product: ${Product}`);
        }
    }
}


