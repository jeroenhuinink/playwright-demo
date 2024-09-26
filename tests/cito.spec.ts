import { test, expect } from '@playwright/test';

test('heeft title', async ({ page }) => {
  await page.goto('https://cito.nl/');

  await expect(page).toHaveTitle(/Cito/);
});

test('kan bestellen pagina openen', async({page}) => {
  await page.goto('https://cito.nl');

  await page.getByRole('link', { name: 'Bestellen' }).click();
  await expect(page.getByRole('heading', {name: 'Productaanbod'})).toBeVisible();
});

test ('kan registratie pagina openen', async({page, context} )=>{
  await page.goto('https://cito.nl');
  await page.getByRole('link', { name: 'Bestellen' }).click();

  const pagePromise = context.waitForEvent('page')
  await page.getByRole('link', { name: 'Aanvragen bestelaccount' }).click();
  const newPage = await pagePromise
  await expect(newPage).toHaveTitle(/registreren/i)
})
