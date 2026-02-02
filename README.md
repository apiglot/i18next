# Apiglot

Apiglot is an AI-powered localization platform that helps you implement `i18n` (internationalization) in modern web frameworks (React, Next, Vue, Svelte, SolidJS, Astro, etc) in an easy, fast and professional way. You define your app's content in a single language (your choice), optionally providing extra context to the content, and Apiglot uses AI to translate your app's content to +30 base languages (plus regional variations). Learn more at https://www.apiglot.com.

Apiglot provides several solutions for integrating with existing `i18n` frameworks. A robust and feature-rich `i18n` framework for javascript-based apps is [i18next](https://www.i18next.com/).

This package just provides an ultra lightweight factory to build `i18next` backend, which you can attach to your `i18next` instance so that it loads translations files from your Apiglot's project.

## Install

Using npm:
```
npm install @apiglot/i18next
```

Using yarn:
```
yarn add @apiglot/i18next
```

Using pnpm:
```
pnpm add @apiglot/i18next
```

## Quick start

Common usage pattern: create the backend with your project options and register it with i18next.

ESM / modern JS:
```js
import i18next from 'i18next';
import { createI18nextBackend } from '@apiglot/i18next';

const ApiglotBackend = createI18nextBackend({
    projectId: 'my-project-id',
    apiKey: process.env.APIGLOT_API_KEY,
});

i18next
    .use(ApiglotBackend)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        // other i18next options
    });
```

## Contributing

Contributions and bug reports are welcome. Please open issues or PRs in the repository.

## License

Provided under the license of the main Apiglot project. Check repository for details.