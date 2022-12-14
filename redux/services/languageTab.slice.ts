import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageTab } from '../models/languageTab';

export interface LanguageTabState {
  value: LanguageTab;
}

const initialState: LanguageTabState = {
  value: {
    languages: ['ru', 'en'],
  },
};

export const languageTabSlice = createSlice({
  name: 'languageTabData',
  initialState,
  reducers: {
    languageTabData: (
      state: LanguageTabState,
      action: PayloadAction<LanguageTab>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { languageTabData } = languageTabSlice.actions;

export default languageTabSlice.reducer;
