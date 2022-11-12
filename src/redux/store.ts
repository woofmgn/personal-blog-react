import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import articles from './slices/articlesSlice';
import stories from './slices/storiesSlice';
import user from './slices/userSlice';

export const store = configureStore({
  reducer: {
    articles,
    user,
    stories,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; 