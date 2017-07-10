import { AngularDashboardSeedPage } from './app.po';

describe('angular-dashboard-seed App', () => {
  let page: AngularDashboardSeedPage;

  beforeEach(() => {
    page = new AngularDashboardSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
