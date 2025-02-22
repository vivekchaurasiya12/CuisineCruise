import { configureStore } from "@reduxjs/toolkit"  //Simplifies Redux state management.
import cartReducer from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for redux-persist
const persistConfig = {
    key: "root",
    storage,
  };

  // Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, cartReducer);


const appStore = configureStore({
    //configureStore() automatically sets up Redux DevTools and middleware.
    // Here we will add slice 
    reducer :{
        cart : persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});
export const persistor = persistStore(appStore);
export default appStore;