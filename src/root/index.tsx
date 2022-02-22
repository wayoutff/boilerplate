import React from 'react';

import Browser from 'src/root/Browser';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistStore } from 'redux-persist';

/* Routes from apps */
import * as main from 'src/apps/main';
import * as admin from 'src/apps/admin';

/* init react i18n */
import 'src/config/i18n';

import { store } from '../store';

const COLORS = {
  text: '#333',
  background: '#ebebeb',
  primary: '#2ea44f'
};

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: ${COLORS.text};
    --color-background: ${COLORS.background};
    --primary: ${COLORS.primary};
  }
`;


export default function Root() {

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Browser apps={{ main, admin }} />
      </PersistGate>
    </Provider>
    
  );
}
