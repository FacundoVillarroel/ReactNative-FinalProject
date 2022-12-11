import { petsTypes } from "../types";

const { SELECT_PET } = petsTypes;

export const selectPet = ( id ) => ({
  type:SELECT_PET,
  id:id
})