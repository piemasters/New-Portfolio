// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const puppeteer = require('puppeteer');

exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ['--no-sandbox'],
      binary: puppeteer.executablePath()
    }
  },
  directConnect: true,
  specs: [
    './features/**/*.feature'
  ],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './steps/**/*.ts'
    ],
    strict: true,
    format: [
      'json:e2e/report.json'
    ],
    dryRun: false,
    compiler: []
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
  }
};
