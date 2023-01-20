import { createSlice } from "@reduxjs/toolkit";
import { deleteFavPet, getFavPets, insertFavPet } from "../db";

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
      const newList = [...state.favoritesList, action.payload];
      state.favoritesList = newList;
    },
    removeFavorite: (state, action) => {
      const newList = state.favoritesList.filter(pet => pet.id !== action.payload.petId)
      state.favoritesList = newList
    }
  }
})

export const {updateFavorites, addFavorite, removeFavorite} = favoritesSlice.actions;

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

export const saveFavorite = (pet, setFav) => {
  return async (dispatch) => {
    try {
      const result = await insertFavPet(pet, pet.id)
      if (result.insertId){
        setFav(true);
        dispatch(addFavorite(pet));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteFavorite = (petId, setFav) => {
  return async (dispatch) => {
    try {
      const result = await deleteFavPet(petId)
      if (result.rowsAffected){
        setFav(false)
        dispatch(removeFavorite({petId}))
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default favoritesSlice.reducer