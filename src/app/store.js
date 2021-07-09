import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../features/bookmark/bookmarkSlice'

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});
