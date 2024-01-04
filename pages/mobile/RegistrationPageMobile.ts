import {Page, expect} from '@playwright/test'
import Yopmail from '../../pages/email/Yopmail';
import PageInboxKitten from "../email/InboxKitten";



export default class RegistrationPageMobile {

    public newlyCreatedUsername: string = '';
    day: string;
    month: string;
    hours: string;
    minutes: string;
    seconds: string;
    private page: Page;
    private locators = {
        LOGIN_BUTTON: '[class="login-trigger btn btn-yellow btn-small btn-mobile-login"]',
        REGISTRATION_BUTTON: '[class="join-btn btn btn-yellow btn-small btn-mobile-login"]',
        JOIN_NOW_BUTTON: '[class="btn-join btn btn-yellow input-block-level"]',
        WELCOME_MESSAGE: '[class="text-red text-18"]',
        USERNAME: '[id="RegistrationForm_username"]',
        EYE_ICON: 'span.password-field-wrapper> span.password-mask-icon',
        PASSWORD: '[id="RegistrationForm_password"]',
        EMAIL: '[id="RegistrationForm_email"]',
        MOBILE: '[id="RegistrationForm_mobile_number"]',
        FIRST_NAME: '[id="RegistrationForm_first_name"]',
        LAST_NAME: '[id="RegistrationForm_last_name"]',
        BIRTH_DATE: '#RegistrationForm_birthdate',
        BIRTH_TABLE: '.pika-single.is-bound',
        CURRENCY: '#RegistrationForm_currency',
        COUNTRY: '#RegistrationForm_country',
        CREATE_ACCOUNT: '#RegistrationForm_submit',
        POP_UP: '[class="announcement--container scrollbot"]',
        CLOSE_POP_UP: '#announcementLightbox span',
        CLOSEPOPUPCAROUSEL: '[class="MobilePopupCarousel__Close__1PTMa"]'
    };

    constructor(page: Page) {
        this.page = page;

    }

    async navigateToRegistration() {
        await this.page.click(this.locators.REGISTRATION_BUTTON); //to be used in future
       //await this.page.click(this.locators.LOGIN_BUTTON); // old one
        //await this.page.click(this.locators.JOIN_NOW_BUTTON); //old one
    }

    async currentDate(value: number, length: number) {
        let result: string = value.toString();
        for (; length > result.length; length -= 1) result = '0' + result;
        return result;
    }

    async getCurrentDate() {
        const now: Date = new Date();

        const year: number = now.getFullYear();
        const month: number = now.getMonth() + 1;
        const day: number = now.getDate();
        const hour: number = now.getHours();
        const minute: number = now.getMinutes();
        const second: number = now.getSeconds();

        const date: string =
            await this.currentDate(day, 2) +
            await this.currentDate(month, 2) +
            await this.currentDate(year, 4) +
            await this.currentDate(hour, 2) +
            await this.currentDate(minute, 2) +
            await this.currentDate(second, 2);


        console.log('Current date: ' + date);
        return date;
    }

    public async fulfillAndSubmitForm(password: string, email: string, telephone: string, firstName: string, lastName: string, birthdate:string, currency: string, country: string) {

        await this.page.waitForLoadState('load');
        const currentdate = (await (this.getCurrentDate())).toString();
        this.newlyCreatedUsername = "Q" + currentdate; // Assign a value to newUsername
        console.log("Newly registered Player: " + this.newlyCreatedUsername);
        await this.page.type(this.locators.USERNAME, this.newlyCreatedUsername);
        await this.page.type(this.locators.PASSWORD, password);
        await this.page.type(this.locators.EMAIL, this.newlyCreatedUsername + email);
        await this.page.type(this.locators.MOBILE, telephone);
        await this.page.type(this.locators.FIRST_NAME, firstName);
        await this.page.type(this.locators.LAST_NAME, lastName);

        this.closePopUp();

        await this.page.waitForSelector(this.locators.BIRTH_DATE);
        await this.page.fill(this.locators.BIRTH_DATE, '');
        await this.page.fill(this.locators.BIRTH_DATE, birthdate);
        await this.page.keyboard.press('Enter');

        try {
            await this.page.focus(this.locators.CURRENCY);
            await this.page.selectOption(this.locators.CURRENCY, currency, {timeout: 10000});
        }catch (e) {
        console.log("unable to set currency")
    }
        try {
        await this.page.click(this.locators.COUNTRY);
        await this.page.selectOption(this.locators.COUNTRY, country, { timeout: 10000 });
        }catch (e) {
            console.log("unable to set Country")
        }
        await Promise.all([
            this.page.waitForNavigation({timeout: 0}),
            await  this.page.click(this.locators.CREATE_ACCOUNT),
        ]);
    }
    async isSuccessfulRegistrationMessageIsDislayed() {
        await this.page.waitForLoadState('load', {timeout:10000})
        const welcomeMSG = this.page.locator(this.locators.WELCOME_MESSAGE);
        await expect(welcomeMSG).toBeVisible();
        const welcomeText = await welcomeMSG.innerText();
        console.log("Welcome message: " + welcomeText);
        //expect('[class="text-red text-18"]').toContain("Welcome to Dafabet");

    }
    public async closePopUp() {
        try {
            await this.page.waitForSelector(this.locators.POP_UP, { state: 'visible', timeout: 1000 });
            await this.page.click("#announcementLightbox span");
        } catch (error) {
            console.log('Continuing - no popups displayed...');
        }
    }

    async closePopUpCarousel () {
          //if (await page.locator('[class="announcement--container scrollbot"]').isVisible()){
          const popUpC = this.page.locator(this.locators.POP_UP).isVisible()

          if (!popUpC) {
              console.log('Continuing - no popups (Carousel) displayed...')
          } else {
              this.page.click(this.locators.CLOSEPOPUPCAROUSEL);
          }
      }

    public async isEmailReceived(product: string) {
        console.log("User in steps: " + this.newlyCreatedUsername);
        const yopmail = new Yopmail(this.page);
        await yopmail.searchForUserinYopmail(this.newlyCreatedUsername);
        await yopmail.checkWelcomeMessage(product);
    }
    public async isEmailReceivedInboxKitten(product: string) {
        console.log("User in steps: " + this.newlyCreatedUsername);
        const inKitten = new PageInboxKitten(this.page);
        await inKitten.searchForUserinInboxKitten(this.newlyCreatedUsername);
        await inKitten.checkWelcomeMessage(product);
    }


}


