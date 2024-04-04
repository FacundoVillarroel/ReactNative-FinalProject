import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../constants/firebase";
import { saveUser, selectUser } from "./user.slice";

const userIdExample = "xnkvmARAFxffFgzg1NxuC0fU5VI3" // insert in initial state this userId to enter with an existing account

const initialState = {
  token:null,
  userId:null,
  email:null,
  error:null
}

const authSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    sign_up: (state, action) => {
      let error = action.payload.error
      if (action.payload.error === "EMAIL_EXISTS") error = "El email ingresado ya esta registrado"

      state.email = action.payload.email
      state.token = action.payload.token
      state.userId = action.payload.userId
      state.error = error
    },
    sign_in: (state, action) => {
      let error = action.payload.error
      if (action.payload.error === "EMAIL_NOT_FOUND") error = "Email no registrado";
      else if(action.payload.error === "INVALID_PASSWORD") error = "Contraseña incorrecta";

      state.email = action.payload.email
      state.token = action.payload.token
      state.userId = action.payload.userId
      state.error = error
    },
    log_out: (state, action) => {
      state.email = null;
      state.token = null;
      state.userId = null;
    },
    updateAuthError:(state, action) => {
      state.error = null
    }
  },
});

export const { sign_up, sign_in, log_out, updateAuthError } = authSlice.actions;


export const signUp = (email, password, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true)
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
      dispatch(sign_up({token:data.idToken, userId:data.localId, error:data.error?.message, email}))
      if(!data.error){
        dispatch(saveUser({userId:data.localId, email}))
        dispatch(selectUser(data.localId))
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
}

export const signIn = (email, password, setLoading) => {
  return async (dispatch) => {
    try {
      setLoading(true)
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

      dispatch(sign_in({token:data.idToken, userId:data.localId, error:data.error?.message, email}));
      if(!data.error){
        dispatch(selectUser(data.localId))
      }
      setLoading(false)
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

export const resetAuthError = () => {
  return (dispatch) => {
    dispatch(updateAuthError({}));
  }
}

export default authSlice.reducer;