import { Locator, Page } from '@playwright/test';

export class PlaywrightPage {
  constructor(page: Page, url = 'http://localhost:5173/') {
    this.url = url;

    this.page = page;

    this.emailInput = this.page.locator('input[data-test-id="email-input"]');

    this.passwordInput = this.page.locator(
      'input[data-test-id="password-input"]',
    );

    this.singInButton = this.page.locator(
      'button[data-test-id="sing-in-button"]',
    );

    this.userName = this.page.locator('span[data-test-id="user-name"]');

    this.offerPrice = this.page.locator('b[data-test-id="offer-price"]');

    this.firstOfferCard = this.page
      .locator('article[data-test-id="offer-card"]')
      .first();

    this.firstOfferTitle = this.page
      .locator('article[data-test-id="offer-card"] h2 a')
      .first();

    this.offerRating = this.page.locator(
      '.place-card__rating .place-card__stars span',
    );

    this.offerPageTitle = this.page.locator(
      'h1[data-test-id="offer-page-title"]',
    );
  }

  public readonly url: string;

  private readonly page: Page;

  public readonly emailInput: Locator;

  public readonly passwordInput: Locator;

  public readonly singInButton: Locator;

  public readonly userName: Locator;

  public readonly offerPrice: Locator;

  public readonly firstOfferCard: Locator;

  public readonly firstOfferTitle: Locator;

  public readonly offerRating: Locator;

  public readonly offerPageTitle: Locator;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }

  public async selectSortOption(option: string): Promise<void> {
    await this.page.locator(`li[data-test-id="${option}"]`).click();
  }
}
