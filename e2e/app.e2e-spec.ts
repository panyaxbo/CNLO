import { CNLOPage } from './app.po';

describe('cnlo App', function() {
  let page: CNLOPage;

  beforeEach(() => {
    page = new CNLOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
