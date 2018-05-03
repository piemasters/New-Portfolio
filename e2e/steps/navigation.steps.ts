import { expect } from 'chai';
import { defineSupportCode, setDefaultTimeout } from 'cucumber';
import { AppPage } from './navigation.po';

setDefaultTimeout(60 * 1000);

defineSupportCode(({Given, When, Then, Before}) => {
  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the portfolio homepage',
    () => app.navigateTo());

  When('I navigate to the {string} page',
    (page: string) => app.navigateToPage(page));

  Then('I should see the {string} title',
    (title: string) => app.getPageHeader()
      .then(page_header => expect(page_header).to.equal(title)));

});
