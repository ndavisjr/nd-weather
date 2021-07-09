import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    user: userSlice,
  },
});
