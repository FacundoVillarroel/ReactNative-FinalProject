import {URL_BASE} from "@env";
import { createSlice } from "@reduxjs/toolkit";

import Pet from "../models/pet";

const initialState = {
  pets: [],
  filteredPets:[],
  filteredByAuthor: [],
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
        action.payload.status,
        action.payload.authorId
      )
      state.pets.push({...newPet});
    },
    updateFilterPets: (state, action) => {
      const categoryId = action.payload.categoryId
      const statusId = action.payload.statusId 
      if (!statusId) {
        state.filteredPets = state.pets.filter(pet => pet.categoryId === categoryId || categoryId === "all")
        return
      }
      if (!categoryId) {
        state.filteredPets = state.pets.filter(pet => pet.status === statusId || statusId === "all") 
        return
      }
      const filteredPets = state.pets.filter(pet => ((pet.categoryId === categoryId || categoryId === "all") && (pet.status === statusId || statusId === "all")))
      state.filteredPets = filteredPets
    },
    updateSelectedPet: (state, action) => {
      const petFound = state.pets.find(pet => pet.id === action.payload.id)
      if (petFound){ state.selected = petFound} 
    },
    updateFilterByAuthor: (state, action) => {
      const filteredPets = state.pets.filter(pet => pet.authorId === action.payload.userId)
      state.filteredByAuthor = filteredPets
    }
  },
});

export const { addPet, updateFilterPets, updateSelectedPet, updatePetsList, updateFilterByAuthor } = petSlice.actions;

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

export const filterPets = ({categoryId, statusId}) => {
  return (dispatch) => {
    dispatch(updateFilterPets({categoryId, statusId}))
  }
}

export const selectPet = (id) => {
  return (dispatch) => {
    dispatch(updateSelectedPet({id}))
  }
}

export const getPets = (setLoading = () => null) => {
  return async (dispatch) => {
    try {
      setLoading(true)
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
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
}

export const filterByAuthor = (userId) => {
  return async (dispatch) => {
    dispatch(updateFilterByAuthor({userId}))
  }
}

export const deletePet = (id, userId, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true)
      await fetch(`${URL_BASE}/pets/${id}.json`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      dispatch(getPets())
      dispatch(filterByAuthor(userId))
      setLoading (false)
    } catch (error) {
      console.log(error);
    }
  }
}

export default petSlice.reducer;