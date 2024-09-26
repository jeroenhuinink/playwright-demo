import { test as base, Page } from '@playwright/test';

export const test = base.extend<{registratiePage: Page}>({
    registratiePage: async ({ page, context }, use ) => {
        await page.goto('https://cito.nl');
        await page.getByRole('link', { name: 'Bestellen' }).click();
      
        const pagePromise = context.waitForEvent('page')
        await page.getByRole('link', { name: 'Aanvragen bestelaccount' }).click();
        const registratiePage = await pagePromise
        await use(registratiePage);
    }
  });

  export { expect } from '@playwright/test';