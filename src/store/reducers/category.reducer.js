import { CATEGORIES } from "../../constants/data/categories";
import { categoryTypes } from "../types";

const { SELECT_CATEGORY } = categoryTypes

const initialState = {
  categories:CATEGORIES,
  selected:null
}

const categoryReducer = (state = initialState, action ) => {
  switch(action.type){
    case SELECT_CATEGORY:
    default: 
      return state
  }
}

export default categoryReducer