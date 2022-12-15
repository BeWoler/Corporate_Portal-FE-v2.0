import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user';

export interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {
    id: '',
    email: '',
    username: '',
    isLogin: false,
  },
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    userData: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { userData } = userSlice.actions;

export default userSlice.reducer;
