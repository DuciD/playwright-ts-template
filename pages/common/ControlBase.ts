import { Page, BrowserContext} from "@playwright/test";
import { waitForEventType } from "./EventHelper";

export default class ControlBase {
    private page: Page
    constructor(page: Page) {
         this.page = page;


    }
///-----------Navigation---------------------------------------------///
    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }
    async waitForPageEvent(): Promise<Page> {
        return waitForEventType(this.page.context());
    }
/* eslint-disable */
    async waitForNewPageEvent(): Promise<Page> {
        return new Promise((resolve) => {
            const listener = (eventContext: any) => {
                eventContext.on('page', (newPage: Page) => {
                    resolve(newPage);
                });
            };

            this.page.context().once('close', listener);
        });
    }
    async waitForNewPage(): Promise<Page> {
        return new Promise((resolve) => {
            const context = this.page.context(); // Capture the context
            const listener = (eventContext: BrowserContext) => {
                if (eventContext === context) {
                    eventContext.on('page', (newPage: Page) => {
                        console.log("New page created:", newPage.url()); // Log the new page URL
                        resolve(newPage);
                    });
                }
            };
            context.once('close', () => {
                console.log("Context closed before new page was created"); // Log if the context is closed prematurely
                // You might also consider rejecting the Promise here
            });
            context.on('page', (page: Page) => {
                console.log("Page created within context:", page.url()); // Log pages created in the context for debugging
            });
            context.once('close', listener);
        });
    }
    async waitForNewPagePromise(): Promise<Page> {
        const context = this.page.context(); // Capture the context
        let newPage: Page | undefined;

        const newPagePromise = new Promise<Page>((resolve) => {
            const pageListener = (page: Page) => {
                if (!newPage) {
                    newPage = page;
                    console.log("New page created:", page.url()); // Log the new page URL
                    resolve(page);
                }
            };

            const contextCloseListener = () => {
                if (!newPage) {
                    console.log("Context closed before new page was created"); // Log if the context is closed prematurely
                    // You might also consider rejecting the Promise here
                }
                context.off('page', pageListener); // Remove the page listener
            };

            context.once('close', contextCloseListener);
            context.on('page', pageListener);
        });

        return newPagePromise;
    }


    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForURL(link),
            this.page.click(link)
        ])
    }
    async waitForNavigationOnClick(locator:string) {
      await Promise.all([
        this.page.waitForLoadState( "networkidle" ),
        this.page.click(locator)
      ])
    }
    async waitForNavigationURL(link:string) {
      await Promise.all([
        this.page.waitForLoadState( "networkidle" ),
        this.page.waitForURL(link)
      ])
    }
    ///-----Click-------------------------------------------------------//
    async waitAndClick(locator: string) {

        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }
}

