import { HowangularworksPage } from './app.po';

describe('howangularworks App', function() {
  let page: HowangularworksPage;

  beforeEach(() => {
    page = new HowangularworksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
