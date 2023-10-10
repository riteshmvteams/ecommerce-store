import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkedProducts: localStorage.getItem("bookmark")
    ? JSON.parse(localStorage.getItem("bookmark"))
    : [],
};

export const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action) => {
      console.log(action.payload);
      if (state.bookmarkedProducts.length > 0) {
        const matchIndex = state.bookmarkedProducts.findIndex(
          (prod) => prod.id == action.payload.id
        );

        if (matchIndex > -1) {
          state.bookmarkedProducts.splice(matchIndex, 1);
          localStorage.setItem(
            "bookmark",
            JSON.stringify(state.bookmarkedProducts)
          );
        } else {
          state.bookmarkedProducts.push(action.payload);
          localStorage.setItem(
            "bookmark",
            JSON.stringify(state.bookmarkedProducts)
          );
        }
      } else {
        state.bookmarkedProducts.push(action.payload);
        localStorage.setItem(
          "bookmark",
          JSON.stringify(state.bookmarkedProducts)
        );
      }
    },
  },
});

export const { addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
