import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import bookmarkReducer from "./features/bookmarkSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    bookmark: bookmarkReducer,
  },
});
