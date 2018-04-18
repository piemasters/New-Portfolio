import { browser, by, element } from 'protractor';

export class AppPage {

  public navigateTo() {
    return browser.get('/');
  }

  public navigateToPage(text: string) {
    return element(by.id('nav-link-' + text.toLowerCase())).click();
  }

  public getPageHeader() {
    return element(by.className('page-title')).getText();
  }

}

