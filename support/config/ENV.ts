import * as dotenv from "dotenv"
dotenv.config();
export default class ENV{
    
    static LOCALE: string = process.env.LOCALE || 'en';
    static BROWSER: string = process.env.BROWSER || 'chromium';
    static PLATFORM: string = process.env.PLATFORM || 'desktop';
    static PARALLEL_THREAD: string = process.env.PARALLEL_THREAD || '4';
    static HEADLESS: string = process.env.HEADLESS || 'true';
    static RETRIES: string = process.env.RETRIES || '0';
    static EXPECTED_WAIT: string = process.env.EXPECTED_WAIT || '30000';
    static DEFAULT_WAIT: string = process.env.DEFAULT_WAIT || '60000';
    static EXTENDED_WAIT: string = process.env.EXTENDED_WAIT || '90000';


    static BASE_URL_DAFABET_DESKTOP: string = process.env.BASE_URL_DAFABET_DESKTOP || '';
    static BASE_URL_DAFABET_MOBILE: string = process.env.BASE_URL_DAFABET_MOBILE || '';
    static BASE_URL_NEXTBET_DESKTOP: string = process.env.BASE_URL_NEXTBET_DESKTOP || '';
    static BASE_URL_NEXTBET_MOBILE: string = process.env.BASE_URL_NEXTBET_MOBILE || '';
    static BASE_URL_ZEDBET_DESKTOP: string = process.env.BASE_URL_ZEDBET_DESKTOP || '';
    static BASE_URL_ZEDBET_MOBILE: string = process.env.BASE_URL_ZEDBET_MOBILE || '';
    
    //#Backoffices
    static ICORE_BASE_URL: string = process.env.ICORE_BASE_URL || '';
    static ICORE_USERNAME: string = process.env.ICORE_USERNAME || '';
    static ICORE_PASSWORD: string = process.env.ICORE_PASSWORD || '';
    
    static TAURUS_BASE_URL: string = process.env.TAURUS_BASE_URL || '';
    static TAURUS_USERNAME: string = process.env.TAURUS_USERNAME || '';
    static TAURUS_PASSWORD: string = process.env.TAURUS_PASSWORD || '';
    
    static ALPINE_BASE_URL: string = process.env.ALPINE_BASE_URL || '';
    static ALPINE_USERNAME: string = process.env.ALPINE_USERNAME || '';
    static ALPINE_PASSWORD: string = process.env.ALPINE_PASSWORD || '';
    
    static JPAY_BASE_URL: string= process.env.JPAY_BASE_URL || '';
    static JPAY_USERNAME: string= process.env.JPAY_USERNAME || '';
    static JPAY_PASSWORD: string= process.env.JPAY_PASSWORD || '';
    
    static NBJPAY_BASE_URL: string= process.env.NBJPAY_BASE_URL || '';
    static NBJPAY_USERNAME: string = process.env.NBJPAY_USERNAME || '';
    static NBJPAY_PASSWORD: string = process.env.NBJPAY_PASSWORD || '';
     
    //#Users
    static LOGIN_USER_ASIA: string = process.env.LOGIN_USER_ASIA || '';
    static LOGIN_USER_LATAM: string = process.env.LOGIN_USER_LATAM || '';
    static LOGIN_USER_NEXTBET: string = process.env.LOGIN_USER_NEXTBET || '';
    static LOGIN_USER_ZEDBET: string = process.env.LOGIN_USER_ZEDBET || '';
    static LOGIN_DAFA: string =process.env.LOGIN_DAFA || '';
    static SUCCESSFUL_WITHDRAWAL: string = process.env.SUCCESSFUL_WITHDRAWAL || '';
    static DECLINED_WITHDRAWAL: string = process.env.DECLINED_WITHDRAWAL || '';
    static CANCELLED_WITHDRAWAL: string = process.env.CANCELLED_WITHDRAWAL || '';
    static FUND_TRANSFER: string = process.env.FUND_TRANSFER || '';
    static DEPOSIT: string = process.env.DEPOSIT || '';
    static DEPOSIT_LBT: string = process.env.DEPOSIT_LBT || '';
    static ASIA_FP_USER: string = process.env.ASIA_FP_USER || '';
    static LATAM_FP_USER: string = process.env.LATAM_FP_USER || '';
    static NEXTBET_FP_USER: string =process.env.NEXTBET_FP_USER || '';
    static ZEDBET_FP_USER: string =process.env.ZEDBET_FP_USER || '';
    static CASINO_SWITCHER: string =process.env.CASINO_SWITCHER || '';
    
    //#Password
    static PASSWORD: string = process.env.PASSWORD || '';
    static PASSWORD1: string = process.env.PASSWORD1 || '';

    //Emails
    static FORGOTPASSWORDASIA_EMAIL: string =process.env.FORGOTPASSWORDASIA_EMAIL || '';
    static FORGOTPASSWORDLATAM_EMAIL: string =process.env.FORGOTPASSWORDLATAM_EMAIL || '';
    static FORGOTPASSWORDZEDBET_EMAIL: string =process.env.FORGOTPASSWORDZEDBET_EMAIL || '';
    static FORGOTPASSWORDNEXTBET_EMAIL: string =process.env.FORGOTPASSWORDNEXTBET_EMAIL || '';
}