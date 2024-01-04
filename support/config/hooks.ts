import {
    Before,
    BeforeAll,
    AfterAll,
    After,
    setDefaultTimeout,
    ITestCaseHookParameter,
    Status,
    formatterHelpers
} from "@cucumber/cucumber";
import {Browser} from "@playwright/test";
import { getBrowser } from "./browsers";
import Log from "../logger/Log";
import * as fs from 'fs-extra'
import globals from "./platforms";

setDefaultTimeout(90000);

let browser: Browser;

BeforeAll(async () => {
    console.log('Launching the browser');
    const platform = process.env.npm_config_PLATFORM || 'desktop';
    globals.setPlatform(platform);

    browser = await getBrowser();
    console.log(`Current platform: ${globals.platform}`);
    console.log(`Launch options: ${JSON.stringify(globals.launchOptions)}`);
});

// Create a new browser context and page per scenario
Before(async function ({pickle, gherkinDocument}: ITestCaseHookParameter) {
    const { line } = formatterHelpers.PickleParser.getPickleLocation({ gherkinDocument, pickle });
    Log.testBegin(`${pickle.name}: ${line}`);
    let viewportSize = null;
    if (globals.platform === 'mobile') {
        viewportSize = { width: 377, height: 850};
    }
    const context = await browser.newContext({
        viewport: viewportSize,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        recordVideo: process.env.RECORD_VIDEO === "true" ? {dir: './test-results/videos'} : undefined,
    });
    const page = await context.newPage();
    if (globals.platform === 'mobile') {
        await page.route('**/*', (route: any) => {
            const headers = {
                ...route.request().headers(),
                'User-Agent': globals.launchOptions.userAgent,
            };
            route.continue({ headers });
        });
    }

    await globals.setViewport(page);
    this.context = context; // Store the context for later use
    this.page = page; // Store the page for later use
});


// Cleanup after each scenario
After(async function ({result, pickle, gherkinDocument}: ITestCaseHookParameter) {
    const {line} = formatterHelpers.PickleParser.getPickleLocation({gherkinDocument, pickle})
    const status = result?.status ?? Status.UNKNOWN
    const scenario = pickle.name;
    const videoPath = await this.page?.video()?.path();
    if (status === Status.FAILED) {
        const image = await this.page?.screenshot({
            path: `./test-results/screenshots/${scenario} (${line}).png`,
            fullPage: true
        });
        await this.attach(image, 'image/png');
        Log.error(`${scenario}: ${line} - ${status}\n${result?.message}`);
    }
    await this.page?.close();
    await this.context?.close();
    if (process.env.RECORD_VIDEO === "true") {
        if (status === Status.FAILED) {
            fs.renameSync(videoPath, `./test-results/videos/${scenario}(${line}).webm`);
            await this.attach(fs.readFileSync(`./test-results/videos/${scenario}(${line}).webm`), 'video/webm');
        } else {
            fs.unlinkSync(videoPath);
        }
    }
    Log.testEnd(`${scenario}: ${line}`, status);
});
// close the browser
AfterAll(async function () {
    await browser.close();
});