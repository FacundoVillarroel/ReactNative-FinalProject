import { configureStore } from "@reduxjs/toolkit";

import petReducer from "./pet.slice";
import categoryReducer from "./category.slice";
import authReducer from "./auth.slice";
import statusReducer from "./status.slice";
import userReducer from "./user.slice";
import favoritesReducer from "./favorites.slice";

export const store = configureStore({
  reducer: {
    auth:authReducer,
    category:categoryReducer,
    pet:petReducer,
    status:statusReducer,
    favorites:favoritesReducer,
    user:userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});