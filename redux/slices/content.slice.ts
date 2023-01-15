import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Content } from '../models/content';

export interface ContentState {
  value: Content;
}

const initialState: ContentState = {
  value: {
    navLinks: {
      home: '/home',
      chats: '/chats',
      posts: '/posts',
      network: '/network',
      settings: '/settings',
    },
  },
};

export const contentSlice = createSlice({
  name: 'contentData',
  initialState,
  reducers: {
    contentData: (state: ContentState, action: PayloadAction<Content>) => {
      state.value = action.payload;
    },
  },
});

export const { contentData } = contentSlice.actions;

export default contentSlice.reducer;
