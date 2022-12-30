import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES } from "../constants/data/categories";

const initialState = {
  categories:CATEGORIES,
  selected:null
}

const categorySlice = createSlice({
  name:"category",
  initialState,
  reducers:{
    updateSelectedCategory: (state, action) => {
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.payload.categoryId
      );
      if (indexCategory !== -1) {state.selected = state.categories[indexCategory]}
      else {state.selected = state.categories}
    }
  }
})

export const { updateSelectedCategory } = categorySlice.actions;

export const selectCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(updateSelectedCategory({categoryId}))
  }
}

export default categorySlice.reducer;