// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  console.log(process.env.LOGIN_USERNAME);
  await page.goto('/');

  await page
    .locator('input#username')
    .fill(process.env.LOGIN_USERNAME);

  await page
    .locator('input#password')
    .fill(process.env.LOGIN_PASSWORD);


  Promise.all([
    page.waitForNavigation(),
    page.locator('input#Login').click(),
  ]);

//   await page.locator('header#oneHeader').waitFor();

//   await page.locator('a[title="Accounts"]').click();

//   await expect(page.locator("h1 span.slds-assistive-text")).toHaveText("Accounts");
});
