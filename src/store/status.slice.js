import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/data/status";

const initialState = {
  status:STATUS,
  selected:null
}

const statusSlice = createSlice({
  name:"status",
  initialState,
  reducers:{
    updateSelectedStatus: (state, action) => {
      const indexStatus = state.status.findIndex(
        (category) => category.id === action.payload.statusId
      );
      if (indexStatus !== -1) {state.selected = state.status[indexStatus]}
      else {state.selected = state.status}
    }
  }
})

export const { updateSelectedStatus } = statusSlice.actions;

export const selectStatus = (statusId) => {

  return async (dispatch) => {
    dispatch(updateSelectedStatus({statusId}))
  }
}

export default statusSlice.reducer;