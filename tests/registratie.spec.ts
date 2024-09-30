import { test, expect } from './registratie';

test('heeft title', async ({ registratiePage}) => {
    await expect(registratiePage).toHaveTitle(/registreren/i)
});

test('kan niet registreren met een leeg formulier', async ({ registratiePage }) => {
    const expected = registratiePage.url;
    await registratiePage.getByRole('button', { name: 'Verzenden' }).click();

    // Het brin code veld heeft de focus
    await expect(registratiePage.getByPlaceholder('99XX00')).toBeFocused();

    // We zijn niet weg genavigeerd van de pagina
    expect(registratiePage.url).toBe(expected);
});

test('velden worden automatisch ingevuld obv brin code', async ({ registratiePage }) => {
    await expect(registratiePage.getByLabel('Klantnummer')).toBeEmpty();
    await registratiePage.getByPlaceholder('99XX00').fill('10PT00');
    await expect(registratiePage.getByLabel('Klantnummer')).not.toBeEmpty();
});

test('kan niet registreren zonder persoonlijke gegevens', async ({ registratiePage }) => {
    const expected = registratiePage.url;
    await registratiePage.getByPlaceholder('99XX00').fill('10PT00');
    await registratiePage.getByRole('button', { name: 'Verzenden' }).click();
    await expect(registratiePage.getByText('Voornaam is verplicht')).toBeVisible();
    expect(registratiePage.url).toBe(expected);
});

test('toon waarschuwing bij ongeldige brin code', async ({ registratiePage }) => {
    await registratiePage.getByPlaceholder('99XX00').click();
    await registratiePage.keyboard.type('99PT00');

    await expect(registratiePage.getByText('Heb je geen BRIN/klantnummer')).toBeVisible();
});