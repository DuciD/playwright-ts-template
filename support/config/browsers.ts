import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";
import ENV from "./ENV";


const options: LaunchOptions = {
    headless: ENV.HEADLESS === 'true' || false
}
export const getBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || process.env.BROWSER || "chromium";
    switch (browserType) {
        case "chromium":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }

}