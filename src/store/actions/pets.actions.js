import { petsTypes } from "../types";

const { SELECT_PET, FILTER_PETS } = petsTypes;

export const selectPet = ( id ) => ({
  type:SELECT_PET,
  id:id
})

export const filterPets = ( id ) => ({
  type: FILTER_PETS,
  categoryId: id
})