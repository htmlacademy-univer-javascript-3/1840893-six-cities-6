import { test, expect } from '@playwright/test';
import { PlaywrightPage } from './playwrightPage';

const USER_EMAIL = 'test@gmail.com';
const USER_PASSWORD = 'Qwerty123';

test('user authentication - login and verify user name', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);

  await page.goto(`${playwrightPage.url}login`);

  await playwrightPage.emailInput.fill(USER_EMAIL);

  await playwrightPage.passwordInput.fill(USER_PASSWORD);

  await playwrightPage.singInButton.click();

  await page.waitForURL(playwrightPage.url);

  await expect(playwrightPage.userName).toContainText(USER_EMAIL);
});

test('sorting - offers sorted by price low to high', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.load();

  await playwrightPage.selectSortOption('priceLowToHigh');

  await expect(playwrightPage.offerPrice.first()).toBeVisible();

  const firstText = await playwrightPage.offerPrice.first().innerText();
  const first = parseInt(firstText.replace(/\D/g, ''), 10);

  const secondText = await playwrightPage.offerPrice.nth(1).innerText();
  const second = parseInt(secondText.replace(/\D/g, ''), 10);

  expect(first).toBeLessThanOrEqual(second);
});

test('sorting - price high to low', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.load();

  await playwrightPage.selectSortOption('priceHighToLow');

  await expect(playwrightPage.offerPrice.first()).toBeVisible();

  const firstText = await playwrightPage.offerPrice.first().innerText();
  const first = parseInt(firstText.replace(/\D/g, ''), 10);

  const secondText = await playwrightPage.offerPrice.nth(1).innerText();
  const second = parseInt(secondText.replace(/\D/g, ''), 10);

  expect(first).toBeGreaterThanOrEqual(second);
});

test('sorting - top rated first', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.load();

  await playwrightPage.selectSortOption('topRated');

  const first = parseInt(
    (await playwrightPage.offerRating.first().evaluate((el) => (el as HTMLElement).style.width)) || '0',
    10
  );
  const second = parseInt(
    (await playwrightPage.offerRating.nth(1).evaluate((el) => (el as HTMLElement).style.width)) || '0',
    10
  );

  expect(first).toBeGreaterThanOrEqual(second);
});

test('offer page navigation', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.load();

  const firstCardTitle = await playwrightPage.firstOfferTitle.innerText();

  await playwrightPage.firstOfferCard.click();

  await expect(playwrightPage.offerPageTitle).toHaveText(firstCardTitle);
});
