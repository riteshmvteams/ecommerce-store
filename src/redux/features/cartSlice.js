import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartItems: 0,
  cartPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
