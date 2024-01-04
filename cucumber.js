/* eslint-disable no-undef */
/* eslint-disable */
require('dotenv').config({
  path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env',
  override: process.env.NODE_ENV ? true : false,
});
require('fs-extra').ensureDir('./test-results/reports');
require('fs-extra').remove('./test-results/screenshots');
require('fs-extra').remove('./test-results/videos');
module.exports = {
  default: {
      tags: process.env.npm_config_TAGS || "",
      formatOptions: {
          snippetInterface: "async-await"
      },
      paths: [
          "./features/"
      ],
      publishQuiet: true,
      dryRun: false,
      require: [
          "support/steps/*.ts",
          "support/config/hooks.ts"
      ],
      requireModule: [
          "ts-node/register"
      ],
      format: [
          "progress-bar",
          "html:test-results/cucumber-report.html",
          "json:test-results/cucumber-report.json",
          "rerun:@rerun.txt"
      ],
      parallel:parseInt(process.env.PARALLEL_THREAD)
  },
  rerun: {
      formatOptions: {
          snippetInterface: "async-await"
      },
      publishQuiet: true,
      dryRun: false,
      require: [
          "src/test/steps/*.ts",
          "src/hooks/hooks.ts"
      ],
      requireModule: [
          "ts-node/register"
      ],
      format: [
          "progress-bar",
          "html:test-results/cucumber-report.html",
          "json:test-results/cucumber-report.json",
          "rerun:@rerun.txt"
      ],
      parallel: 2
  }
}
/* let options = [
  '--require-module ts-node/register',
  '--require ./support/steps/*steps.ts',
  '--require ./support/config/hooks.ts',
  '--format summary',
  '--format rerun:@rerun.txt',
  '--format json:./reports/cucumber_report.json',
  '--publish-quiet true',
  `--parallel=${process.env.PARALLEL_THREAD}`,
  `--format-options '{"snippetInterface":"async-await"}'`,
  `--retry=${process.env.RETRIES}`,
  `--tags "not @ignore"`,
].join(' ');

let runner = [
  './features/',
  options,
].join(' ');

let rerun = [
  '@rerun.txt',
  options,
].join(' ');

module.exports = { runner, rerun } */
