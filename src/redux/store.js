import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
import { productsApi } from './productsSlice';
import { ordersApi } from './ordersSlice';
import { shoppingCartReducer } from './shoppingCartSlice';

const persistConfig = {
  key: 'shoppingCart',
  storage,
  whitelist: ['shoppingCart'],
};

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  shoppingCart: shoppingCartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    ordersApi.middleware,
    productsApi.middleware,
  ],
});

export const persistor = persistStore(store);
