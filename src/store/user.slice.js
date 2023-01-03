import {URL_BASE} from "@env";
import { createSlice } from "@reduxjs/toolkit";

import User from "../models/User";

const initialState = {
  users:[],
  currentUser:null
}

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    updateUsersList: (state, action) => {
      state.users = action.payload.users || []
    },
    addUser: (state, action) => {
      const newUser = new User(
        action.payload.id,
        action.payload.userId,
        action.payload.email
      )
      state.users.push({...newUser})
    },
    updateCurrentUser: (state, action) => {
      const userFound = state.users.find ( user => user.userId === action.payload.userId)
      if (userFound) { state.currentUser = userFound}
    }
  },
});

export const { updateUsersList, addUser, updateCurrentUser } = userSlice.actions;

export const saveUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/users.json`, {
        method:"POST",
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          ...user
        }),
      });

      const result = await response.json();

      dispatch(addUser({id:result.name, ...user}))
    } catch (error) {
      console.log(error);
    }
  }
}

export const getUsersList = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/users.json`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await response.json();

      const users = Object.keys(data).map((key) => ({
        ...data[key],
        id:key
      }))

      dispatch(updateUsersList({users}))
    } catch (error) {
      console.log(error);
    }
  }
}

export const selectUser = (userId) => {
  return (dispatch) => {
    dispatch(updateCurrentUser({userId}))
  }
}

export default userSlice.reducer