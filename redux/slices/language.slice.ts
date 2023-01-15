import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../models/language';

export interface LanguageState {
  value: Language;
  isLoading: boolean;
}

const initialState: LanguageState = {
  value: {
    error: {
      404: 'Sorry, this page does not exist!',
    },
    auth: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      email: 'Email',
      username: 'Username',
      password: 'Password',
      messageIn: 'If you already have an account, please log in',
      messageUp: 'If you are not registered, please register',
    },
    header: {
      signIn: 'Sign In',
      logout: 'Logout',
      title: 'C-Portal',
      language: 'Language',
    },
    nav: {
      main: 'Home',
      chats: 'Chats',
      posts: 'Posts',
      network: 'Network',
      settings: 'Settings',
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
