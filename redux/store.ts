import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authAPI } from '@/redux/services/auth.service';
import authFormSlice from './slices/authForm.slice';
import contentSlice from './slices/content.slice';
import languageSlice from './slices/language.slice';
import languageTabSlice from './slices/languageTab.slice';
import userSlice from './slices/user.slice';

const rootReducer = combineReducers({
  languageData: languageSlice,
  languageTabData: languageTabSlice,
  contentData: contentSlice,
  authFormData: authFormSlice,
  userData: userSlice,
  [authAPI.reducerPath]: authAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
