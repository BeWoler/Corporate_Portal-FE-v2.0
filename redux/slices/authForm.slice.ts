import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthForm } from '../models/authForm';

export interface AuthFormState {
  value: AuthForm;
}

const initialState: AuthFormState = {
  value: {
    form: 'signin',
  },
};

export const authFormSlice = createSlice({
  name: 'authFormData',
  initialState,
  reducers: {
    authFormData: (state: AuthFormState, action: PayloadAction<AuthForm>) => {
      state.value = action.payload;
    },
    changeForm: (state: AuthFormState, action: PayloadAction<string>) => {
      state.value.form = action.payload;
    },
  },
});

export const { authFormData, changeForm } = authFormSlice.actions;

export default authFormSlice.reducer;
