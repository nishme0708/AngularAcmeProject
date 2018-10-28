import { AngularAcmeProjectPage } from './app.po';

describe('angular-acme-project App', () => {
  let page: AngularAcmeProjectPage;

  beforeEach(() => {
    page = new AngularAcmeProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
