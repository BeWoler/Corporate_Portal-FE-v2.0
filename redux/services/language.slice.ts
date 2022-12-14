import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../models/language';

export interface LanguageState {
  value: Language;
  isLoading: boolean;
}

const initialState: LanguageState = {
  value: {
    header: {
      signIn: 'Sign In',
      logout: 'Logout',
      title: 'C-Portal',
      language: 'Language',
    },
  },
  isLoading: false,
};

export const languageSlice = createSlice({
  name: 'languageData',
  initialState,
  reducers: {
    languageData: (state: LanguageState, action: PayloadAction<Language>) => {
      state.value = action.payload;
    },
  },
});

export const { languageData } = languageSlice.actions;

export default languageSlice.reducer;
