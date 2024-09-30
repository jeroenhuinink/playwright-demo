# Playwright demo project

Dit project bevat wat voorbeeld scripts in playwright.

Documentatie is te vinden op <https://playwright.dev>

## Basis commandos

Run de tests:

```shell
npx playwright test
```

Run de tests in de playwright ui:

```shell
npx playwright test --ui
```

Run de tests alleen in Chromium en bewaar de traces

```shell
npx playwright test --trace on --project chromium
```

Open de test resultaten met de traces

```shell
npx playwright show-report
```
