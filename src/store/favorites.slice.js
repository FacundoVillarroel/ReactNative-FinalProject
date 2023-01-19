import { createSlice } from "@reduxjs/toolkit";
import { getFavPets, insertFavPet } from "../db";

const initialState = {
  favoritesList:[],
}

const favoritesSlice = createSlice({
  name:"favorites",
  initialState,
  reducers:{
    updateFavorites:(state,action) => {
      let list = []
      action.payload.forEach(element => {
        /* parse each pet from the list */
        const pet = JSON.parse(element.pet)
        list.push(pet)
      });
      state.favoritesList = list;
    },
    addFavorite: (state,action) => {
      state.favoritesList.push(action.payload.pet)
    },
  }
})

export const {updateFavorites, addFavorite} = favoritesSlice.actions;

export const loadFavorites = (setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true)
      const result = await getFavPets();
      dispatch(updateFavorites(result?.rows?._array))
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
}

export const saveFavorite = (pet) => {
  return async (dispatch) => {
    const result = await insertFavPet(pet)
    if (result.insertId){
      dispatch(addFavorite(pet))
    }
  }
}

export default favoritesSlice.reducer