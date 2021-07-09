import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarks: []
}

const bookmarkSlice = createSlice({
    name: '"bookmark"',
    initialState,
    reducers:{
        setBookmarks: (state, action) =>{
            state.bookmarks = action.payload;
        }
    }
})

export const { setBookmarks } = bookmarkSlice.actions;

export const selectBookmarks = (state) => state.bookmark.bookmarks;

export default bookmarkSlice.reducer;