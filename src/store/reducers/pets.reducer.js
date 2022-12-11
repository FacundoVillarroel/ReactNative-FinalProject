import { petsTypes } from "../types";
import { PETS } from "../../constants/data/pets";

const { FILTER_PET, SELECT_PET } = petsTypes

const initialState = {
  pets:PETS,
  filteredPets:[],
  selected:null
}

const petsReducer = (state = initialState, action ) => {
  switch( action.type ){
    case SELECT_PET:
      petFound = state.pets.find(pet => pet.id === action.id)
      if (!petFound) return state
      return {
        ...state,
        selected:petFound
      }
    case FILTER_PET:
    default:
      return state
  }
}

export default petsReducer