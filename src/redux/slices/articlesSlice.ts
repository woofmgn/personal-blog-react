import { createSlice } from "@reduxjs/toolkit";

// export type CartItem = {
//   id: number;
//   title: string;
//   price: number;
//   imageUrl: string;
//   count: number;
// }

// export interface CartSliceState {
//   totalPrice: number;
//   items: CartItem[];
// };

// const initialState: CartSliceState = {
//   totalPrice: 0,
//   items: []
// };

const initialState: any = {
  items: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {

  }
});

// const selectCart = (state) => state.cart;

// export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;
export default articlesSlice.reducer;