import { expect } from 'chai';
import { Before, Given, setDefaultTimeout, Then, When } from 'cucumber';
import { AppPage } from './navigation.po';

setDefaultTimeout(60 * 1000);

let app: AppPage;

Before(() => {
  app = new AppPage();
});

Given('I am on the portfolio homepage',
  () => app.navigateTo());

When('I navigate to the {string} page',
  (page: string) => app.navigateToPage(page));

// Then('I should see the {string} title',
//   (title: string) => app.getPageHeader()
//   .then(page_header => expect(page_header).to.equal(title)));

Then('I should see the {string} title', (title: string) => {
  app.getPageHeader().then(page_header => expect(page_header).to.equal(title))
});
  //expect(app.getPageHeader().getText()).toEqual(title);




