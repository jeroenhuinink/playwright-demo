# Playwright demo project

Dit project bevat wat voorbeeld scripts in playwright.

Documentatie is te vinden op <https://playwright.dev>

## Installatie

Om Playwright te gebruiken heb je nodejs ([installatie instructies](https://nodejs.org/en/download/prebuilt-installer)) en npm nodig (wordt meegeïnstalleerd met nodejs)

Run het volgende commando in de root van de project directory.

```shell
npm install
```

Het kan zijn dat je daarna nog de browsers voor playwright moet installeren via:

```shell
npx playwright install
```

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
