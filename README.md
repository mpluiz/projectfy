[//]: # ([![MIT License]&#40;https://img.shields.io/apm/l/atomic-design-ui.svg?&#41;]&#40;https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs&#41;)
[![Tests](https://github.com/mpluiz/projectfy/actions/workflows/test.yml/badge.svg)](https://github.com/mpluiz/projectfy/actions/workflows/test.yml)

# Projectfy

- [projectfy](https://projectfy.mpluiz.com.br/project-registration)
- [storybook projectfy](https://storybook.projectfy.mpluiz.com.br/?path=/story/button--default)

## Features

- Project registration
- List of registered projects

## Roadmap

- Responsive Layout
- Internationalization with vue-i18n
- E2E Test with Cypress

## Requirements
- Node `<lts-version>`

## Environment Variables

Required*

`VUE_APP_GITLAB_API_PATH`*

`VUE_APP_GITLAB_API_TOKEN`*

`VUE_APP_SENTRY_DNS`

`VUE_APP_SENTRY_TRACING_ORIGINS`

## Installation

Instructions to install dependencies and start the dev server\
put required variables in the `env` file*

```bash
cd <your-project-name>
npm i
cp .env-example .env
npm run serve
```

## Tests

Instructions to run tests

```bash
  npm run test
```

Commands for tests

```bash
  npm run test:unit
  npm run test:watch
  npm run test:ci
```

Coverage Report

```bash
  npm run test --coverage
```

## Storybook

Instructions to start storybook

```bash
  npm run storybook
```

## Documentation reference

- [Vuejs Style Guide](https://vuejs.org/style-guide/)
- [Vue Test Utils](https://test-utils.vuejs.org/guide/)
- [Vuex](https://vuex.vuejs.org/guide/)
- [Vue Router](https://router.vuejs.org/guide/)
- [Vuetify](https://vuetifyjs.com/en/getting-started/installation/)
## How to contribute

- Make a fork of this repository;
- Create a branch with your feature: `git checkout -b <your-branch>`;
- Make a commit : `git commit -m '<commit-message>'`;
- Push to your branch: `git push <origin> your-branch`;

## License

[MIT](https://choosealicense.com/licenses/mit/)
