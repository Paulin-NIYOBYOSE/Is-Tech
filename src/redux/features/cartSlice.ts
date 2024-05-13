import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ESModulesRunner } from "vite/runtime";

interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}
const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItemIndex = state.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (existingItemIndex === -1) {
        state.push(action.payload);
      } else {
        state[existingItemIndex].quantity += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
