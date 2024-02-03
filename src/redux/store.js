import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './carsSlice';
import filterReducer from './filterSlice';

const carsPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carsReducer),
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
