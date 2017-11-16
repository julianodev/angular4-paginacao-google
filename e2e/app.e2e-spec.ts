import { PaginacaoGooglePage } from './app.po';

describe('paginacao-google App', function() {
  let page: PaginacaoGooglePage;

  beforeEach(() => {
    page = new PaginacaoGooglePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
