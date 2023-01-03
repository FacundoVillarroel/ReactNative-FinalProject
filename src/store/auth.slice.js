import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../constants/firebase";


const initialState = {
  token:null,
  userId:null,
  error:null
}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    sign_up: (state, action) => {
      let error = action.payload.error
      if (action.payload.error === "EMAIL_EXISTS") error = "El email ingresado ya esta registrado"

      state.token = action.payload.token
      state.userId = action.payload.userId
      state.error = error
    },
    sign_in: (state, action) => {
      let error = action.payload.error
      if (action.payload.error === "EMAIL_NOT_FOUND") error = "Email no registrado";
      else if(action.payload.error === "INVALID_PASSWORD") error = "Contraseña incorrecta";

      state.token = action.payload.token
      state.userId = action.payload.userId
      state.error = error
    },
    log_out: (state, action) => {
      state.token = null;
      state.userId = null;
    }
  },
});

export const { sign_up, sign_in, log_out } = authSlice.actions;


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
      
      const data = await response.json();

      dispatch(sign_up({token:data.idToken, userId:data.localId, error:data.error?.message}))
    } catch (error) {
      console.log(error);
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

      dispatch(sign_in({token:data.idToken, userId:data.localId, error:data.error?.message}));
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(log_out({}))
    } catch (error) {
      console.log(error);
    }
  }
}

export default authSlice.reducer;