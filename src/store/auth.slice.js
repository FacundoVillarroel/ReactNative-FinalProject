import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../constants/firebase";


const initialState = {
  token:null,
  userId:null,
}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    sign_up: (state, action) => {
      state.token = action.payload.token
      state.userId = action.payload.userId
    },
    sign_in: (state, action) => {
      state.token = action.payload.token
      state.userId = action.payload.userId
    },
  },
});

export const { sign_up, sign_in } = authSlice.actions;


export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_UP, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      
      const data = await response.json();

      dispatch(sign_up({token:data.idToken, userId:data.localId}))
    } catch (error) {
      throw error;
    }
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGN_IN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();
      dispatch(sign_in({token:data.idToken, userId:data.localId}));
    } catch (error) {
      throw error;
    }
  }
}

export default authSlice.reducer;