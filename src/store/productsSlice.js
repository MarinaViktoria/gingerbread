import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../allProducts";

const initialState = {
  items: allProducts,
  filtered: allProducts,
  category: "Все",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.category = action.payload;

      if (action.payload === "Все") {
        state.filtered = state.items;
      } else {
        state.filtered = state.items.filter(
          (item) => item.searchTerm === action.payload,
        );
      }
    },
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;
