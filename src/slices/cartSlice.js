import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const isPresent = state.cartItems.some(
        (item) =>
          item.itemId === action.payload.itemId &&
          item.itemName === action.payload.itemName
      );

      if (!isPresent) {
        state.cartItems.push({ ...action.payload, itemCount: 1 });
        state.cartPrice += action.payload.itemPrice;
      } else {
        state.cartItems.forEach((item) => {
          if (item.itemId === action.payload.itemId) {
            item.itemCount += 1;
            state.cartPrice += item.itemPrice;
          }
        });
      }
    },

    removeItem: (state, action) => {
      const updatedCart = state.cartItems.map((item) => {
        if (item.itemId === action.payload) {
          if (item.itemCount >= 1) {
            item.itemCount -= 1;
            state.cartPrice -= item.itemPrice;
            if (item.itemCount === 0) {
              state.cartItems = state.cartItems.filter(
                (item) => item.itemId !== action.payload
              );
            }
          }
        }
        return item;
      });
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
