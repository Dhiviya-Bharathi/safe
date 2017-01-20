import { SafePage } from './app.po';

describe('safe App', function() {
  let page: SafePage;

  beforeEach(() => {
    page = new SafePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
