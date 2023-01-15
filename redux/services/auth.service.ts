import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Token } from '../models/token';
import { User, UserResponseDto } from '../models/user';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_LOCAL_API_URL || 'http://localhost:7000',
  }),
  endpoints: (build) => ({
    signin: build.mutation<UserResponseDto & Token, User>({
      query: (user) => ({
        url: '/auth/signin',
        method: 'POST',
        body: user,
        credentials: 'include',
      }),
    }),
    signup: build.mutation<UserResponseDto & Token, User>({
      query: (user) => ({
        url: '/auth/signup',
        method: 'POST',
        body: user,
        credentials: 'include',
      }),
    }),
    logout: build.mutation<string, boolean>({
      query: (id) => ({
        url: '/auth/logout',
        method: 'POST',
        body: id,
      }),
    }),
    refresh: build.mutation<Token, User>({
      query: (id) => ({
        url: '/auth/refresh',
        method: 'POST',
        body: id,
        credentials: 'include',
      }),
    }),
  }),
});
