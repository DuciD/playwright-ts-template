import { Given, When, Then } from "@cucumber/cucumber";
import RegistrationPageMobile from "../../pages/mobile/RegistrationPageMobile";
import {ICustomWorld} from "../config/custom-world";
import ENV from "../config/ENV";


let registrationPageMobile: RegistrationPageMobile | undefined;

Given("the player navigates to Registration page", async function () {
    registrationPageMobile = new RegistrationPageMobile(this.page);
    await registrationPageMobile.navigateToRegistration();
});
Given('the player is at Dafabet mobile registration page in {string} language and Id {string}', async function (this: ICustomWorld, Language: string, regviaID) {
    const regviaString = "/join/mobile?regvia="
    const REGISTRATION_URL = ENV.BASE_URL_DAFABET_DESKTOP + Language + regviaString + regviaID
    const page = this.page!;
    console.log('Base url: ' + REGISTRATION_URL);
    await page.goto(REGISTRATION_URL, {timeout: 90000});
    registrationPageMobile = new RegistrationPageMobile(page);
   // await page.bringToFront();
});

When(
    /the player enters the registration details (.*), (.*), (.*), (.*), (.*), (.*), (.*), (.*)$/,
    async function (password, email, telephone, firstName, lastName, birthdate, currency, country) {
        if (registrationPageMobile) {
            await registrationPageMobile.fulfillAndSubmitForm(
                password,
                email,
                telephone,
                firstName,
                lastName,
                birthdate,
                currency,
                country
            );
        }
    }
);

Then('the player sees successful message', async function () {
    if (registrationPageMobile) {
        await registrationPageMobile.isSuccessfulRegistrationMessageIsDislayed();
    }
});

Then(/check the (.*) Welcome email has been received$/, async function (product) {
    if (registrationPageMobile) {
        await registrationPageMobile.isEmailReceived(product);
    }
});

Then(/check the (.*) Welcome email has been received in InboxKitten$/, async function (product) {
    if (registrationPageMobile) {
        await registrationPageMobile.isEmailReceivedInboxKitten(product);
    }
});

