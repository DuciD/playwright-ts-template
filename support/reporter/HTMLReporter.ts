
import DateUtil from './utils/DateUtil';
import * as os from "os";
import EnvUtil from "./utils/EnvUtil";
// @ts-ignore
let report: any;
report = require("multiple-cucumber-html-reporter");

report.generate({

    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "BookCart App test report",
    displayDuration: false,
    metadata: {
        browser: {
            name: EnvUtil.getBrowser(),
            version: "latest",
        },
        device: os.hostname(),
        platform: {
            name: os.type(),
            version: os.version(),
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Execution Date", value: DateUtil.dateGenerator("DD/MM/YYYY", 0, 0, 0)  },
            { label: 'Environment', value: EnvUtil.setEnv() },
            { label: "Cycle", value: "Smoke/Sanity" }
        ],
    },
});
// import DateUtil from './utils/DateUtil';
// import EnvUtil from './utils/EnvUtil';
//
// export default class HTMLReporter {
//     public static generateReport() {
//         const os = require('node:os');
//         const report = require('multiple-cucumber-html-reporter');
//         // require('dotenv').config();
//         EnvUtil.setEnv();
//         report.generate({
//             jsonDir: 'test-results/cucumber-report.json',
//             reportPath: './test-results/html/',
//             pageTitle: 'Test Execution Report',
//             reportName: 'Execution Results',
//             displayDuration: false,
//             displayReportTime: false,
//             hideMetadata: false,
//             customMetadata: false,
//             metadata: {
//                 browser: {
//                     name: process.env.BROWSER,
//                     version: 'latest'
//                 },
//                 device: os.hostname(),
//                 platform: {
//                     name: os.type(),
//                     version: os.version(),
//                 }
//             },
//             customData: {
//                 title: 'Run Info',
//                 data: [
//                     { label: 'Execution Date', value: DateUtil.dateGenerator("DD/MM/YYYY", 0, 0, 0) },
//                     { label: 'Base URL', value: process.env.BASE_URL },
//                     { label: 'Environment', value: process.env.NODE_ENV },
//                 ]
//             }
//         });
//     }
// }
// HTMLReporter.generateReport();
