import { expect } from 'chai';
import * as puppeteer from 'puppeteer';
import { After, Before, Given, setDefaultTimeout, Then, When } from 'cucumber';
import { AppPage } from './navigation.po';

setDefaultTimeout(60 * 1000);

const root = 'http://localhost:4200/';
let app: AppPage;
let browser;
let pup_page;

Before(async () => {
  app = new AppPage();
  browser = await puppeteer.launch();
  pup_page = await browser.newPage();
  await pup_page.setViewport({ width: 1280, height: 800 });
  await pup_page.goto(root, { waitUntil: 'networkidle2' });
  await pup_page.screenshot({ path: 'e2e/reports/screenshots/example.png' });
});

Given('I am on the portfolio homepage',
  () => app.navigateTo());

When('I navigate to the {string} page', async (page: string) => {
  app.navigateToPage(page);
  await pup_page.goto(root + page.toLowerCase(), { waitUntil: 'networkidle2' });
});

Then('I should see the {string} title', async (title: string) => {
  app.getPageHeader().then(page_header =>
    expect(page_header).to.equal(title)
  );
  await pup_page.screenshot({ path: 'e2e/reports/screenshots/page_header.png' });
});

After(async () => {
  await browser.close();
});



