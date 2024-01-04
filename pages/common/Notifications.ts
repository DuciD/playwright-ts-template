import {Page} from "@playwright/test";

export default class Notifications{
page:Page
    Locators ={
        POPUP_NOTIFICATION: '[class="fancybox-item fancybox-close"]',
        PUSH_NOTIFICATIONS: 'svg#pushnx-close.modal-close.pushnx-lightbox-title-button rect.modal-close'


    }
    constructor(page:Page) {
        this.page = page;
    }
    public async closeMobileNotificationPopup(){
        const popupNotif = this.page.locator(this.Locators.POPUP_NOTIFICATION);
        if(popupNotif){
            await this.page.click(this.Locators.POPUP_NOTIFICATION);
        }
    }
    public async closePushNotificationPopups(){
        const popupPushNotif = this.page.locator(this.Locators.PUSH_NOTIFICATIONS);
        if(popupPushNotif){
            await this.page.click(this.Locators.PUSH_NOTIFICATIONS);
        }
    }
}