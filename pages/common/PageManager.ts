import { Page } from '@playwright/test';

export default class PageManager {
    private pages: Page[] = [];
    private currentPageIndex: number = -1;

    constructor(private page: Page) {}

    async switchToTab(tabNumber: number) {
        const pages = this.page.context().pages();

        if (tabNumber <= 0 || tabNumber > pages.length) {
            console.error(`Invalid tab number: ${tabNumber}`);
            return;
        }

        this.pages = pages; // Update the pages array with the currently open tabs
        this.currentPageIndex = tabNumber - 1;
    }

    getCurrentPage(): Page | undefined {
        if (this.currentPageIndex >= 0 && this.currentPageIndex < this.pages.length) {
            return this.pages[this.currentPageIndex];
        }
        return undefined;
    }

    getTotalTabs(): number {
        return this.pages.length;
    }
}
