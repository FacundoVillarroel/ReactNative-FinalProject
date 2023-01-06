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
      const userFound = state.users.find ( user => user.userId === action.payload.userId);
      if (userFound) { state.currentUser = userFound};
      console.log("UpdateCurrentUser", state.currentUser);
    },
    updateUsersData: (state, action) => {
      let usersList = state.users.filter(user => user.userId !== action.payload.user.userId);
      usersList.push(action.payload.user);
      state.users = usersList;
      state.currentUser = action.payload.user;
    }
  },
});

export const { updateUsersList, addUser, updateCurrentUser, updateUsersData } = userSlice.actions;

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

export const updateUserData = (updatedUser) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_BASE}/users/${updatedUser.id}.json`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          ...updatedUser
        }),
      })

      const result = await response.json()
      dispatch(updateUsersData({user:result}))
    } catch (error) {
      console.log("Error updateUserData", error);
    }
  }
}

export default userSlice.reducer