import { Page, BrowserContext } from "@playwright/test";

export async function waitForEventType(context: BrowserContext): Promise<Page> {
    return new Promise<Page>((resolve) => {
        const listener = (newPage: Page) => {
            resolve(newPage);
        };

        context.once('page', listener);
    });
}
