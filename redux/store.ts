import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './services/language.slice';
import languageTabSlice from './services/languageTab.slice';
import userSlice from './services/user.slice';

const rootReducer = combineReducers({
  languageData: languageSlice,
  languageTabData: languageTabSlice,
  userData: userSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
