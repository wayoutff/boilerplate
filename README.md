# @wayoutff/boilerplate

- **Framework**: [React 17.x](https://reactjs.org/)
- **State**: [Redux](https://redux.js.org/) + [Redux Saga](https://redux-saga.js.org/)
- **Backend**: [Express 4](https://expressjs.com/)
- **Bundler**: [Webpack 5](https://webpack.js.org/)

## Overview

- `src/*` - contains all source files
  - `apps/*` - separate apps, with similar routes within one project
  - `config/*` - Contains a configuration files, ex: httpClient - axios config with interceptors, etc..
  - `constants/*` - Contains a global constants for project
  - `hooks/*` - Contains a global separate hooks for project
  - `locales/*` - All translations: [language].json files
  - `services/*` - Auxiliary files for the operation of global application services
  - `components/*` - UI-components and all separate components
  - `types/*` - Contains a global types for project
  - `interfaces/*` - Contains a global interfaces for project
  - `store/*` - Application core (Store, state manager)
    - `const/*` - store-only constants
    - `hooks/*` - store-only hooks
    - `modules/*` - Modul System: separate modules based on the module template. Where any of them don't know about the others 🤫
    - `index.ts` - main config store file: contains PersistGate, Sagas starter, Store Provider
- `config/*` - Contains config a project ex: webpack.prod.config, etc..
- `public/*` - All static and public files


## All Stack
- [x] React
- [x] Redux + Saga + Toolkit
- [x] Typescript
- [x] Webpack
- [x] Babel
- [x] CSS Modules
- [x] UI Components
- [x] ESLint
- [x] Router
- [x] Express server
- [x] i18n
- [x] Docker & Docker compose files


## Available Commands:

### Development
  `yarn start` or `npm run start` - start webpack development server

### Production
  `yarn build` - build production build

  `yarn server` or `npm run server` - start a express http server
