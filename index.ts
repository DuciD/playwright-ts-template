import DateUtil from './support/reporter/utils/DateUtil';
import EnvUtil from './support/reporter/utils/EnvUtil';
const report = require('multiple-cucumber-html-reporter');
export default class HTMLReporter {
    public static generateReport() {
        const os = require('node:os');

        // require('dotenv').config();
        EnvUtil.setEnv();
        report.generate({
            jsonDir: 'test-results/cucumber-report.json',
            reportPath: './test-results/html/',
            pageTitle: 'Test Execution Report',
            reportName: 'Execution Results',
            displayDuration: false,
            displayReportTime: false,
            hideMetadata: false,
            customMetadata: false,
            metadata: {
                browser: {
                    name: process.env.BROWSER,
                    version: 'latest'
                },
                device: os.hostname(),
                platform: {
                    name: os.type(),
                    version: os.version(),
                }
            },
            customData: {
                title: 'Run Info',
                data: [
                    { label: 'Execution Date', value: DateUtil.dateGenerator("DD/MM/YYYY", 0, 0, 0) },
                    { label: 'Base URL', value: process.env.BASE_URL },
                    { label: 'Environment', value: process.env.NODE_ENV },
                ]
            }
        });
    }
}
HTMLReporter.generateReport();
