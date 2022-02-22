import 'regenerator-runtime/runtime';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { all } from 'redux-saga/effects';
import { useDispatch } from 'react-redux';
import { persistReducer } from 'redux-persist';

import * as sagas from './modules';
import storage from 'redux-persist/lib/storage';

// reducers
import { reducer as countReducer } from './modules/testCount/slice';

const sagaMiddleware = createSagaMiddleware({});
function initSagas(): void {
  sagaMiddleware.run(function* () {
    yield all(
      Object.values(sagas).map(saga => {
        return saga();
      })
    );
  });
}

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  counter: countReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureAppStore () {
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => [
      // ...getDefaultMiddleware(),
      sagaMiddleware
    ],
  });

  initSagas();
  return store;
}

type ConfiguredStore = ReturnType<typeof configureAppStore>;

export type RootState = ReturnType<ConfiguredStore['getState']>;
export type AppDispatch = ConfiguredStore['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const store = configureAppStore();
