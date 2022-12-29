import {URL_BASE} from "@env";
import { createSlice } from "@reduxjs/toolkit";

import Pet from "../models/pet";

const initialState = {
  pets: [],
  filteredPets:[],
  selected:null,
}

const petSlice = createSlice({
  name:"pet",
  initialState,
  reducers:{
    updatePetsList: ( state, action ) => {
      state.pets = action.payload.pets || []
    },
    addPet: (state, action) => {
      const newPet = new Pet(
        action.payload.id,
        action.payload.image,
        action.payload.name,
        action.payload.categoryId,
        action.payload.breed,
        action.payload.gender,
        action.payload.hair,
        action.payload.eyes,
        action.payload.chip,
        action.payload.collar,
        action.payload.date,
        action.payload.lossZone,
        action.payload.description,
        action.payload.contact,
        action.payload.isLost
      )
      state.pets.push({...newPet});
    },
    updateFilterPets: (state, action) => {
      const filteredPets = state.pets.filter(pet => pet.categoryId === action.payload.categoryId)
      state.filteredPets = filteredPets
    },
    updateSelectedPet: (state, action) => {
      const petFound = state.pets.find(pet => pet.id === action.payload.id)
      if (petFound){ state.selected = petFound} 
    }
  },
});

export const { addPet, updateFilterPets, updateSelectedPet, updatePetsList } = petSlice.actions;

export const savePet = (pet) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/pets.json`,{
        method:"POST",
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          ...pet
        }),
      });
      
      const result = await response.json();

      dispatch(addPet({id:result.name, ...pet}))

    } catch (err) {
      console.log(err);
    }
  }
}

export const filterPets = (categoryId) => {
  return (dispatch) => {
    dispatch(updateFilterPets({categoryId}))
  }
}

export const selectPet = (id) => {
  return (dispatch) => {
    dispatch(updateSelectedPet({id}))
  }
}

export const getPets = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/pets.json`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await response.json();

      const pets = Object.keys(data).map((key) => ({
        ...data[key],
        id:key
      }))

      dispatch(updatePetsList({pets}))
    } catch (err) {
      console.log(err);
    }
  }
}
export default petSlice.reducer;