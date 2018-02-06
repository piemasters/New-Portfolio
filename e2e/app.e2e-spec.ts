import { AppPage } from './app.po';

describe('portfolio App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display name in navbar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('David Norton');
  });
});
