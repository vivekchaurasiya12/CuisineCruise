import { configureStore } from "@reduxjs/toolkit"  //Simplifies Redux state management.
import cartReducer from "./cartSlice";
 

const appStore = configureStore({
    //configureStore() automatically sets up Redux DevTools and middleware.
    // Here we will add slice 
    reducer :{
        cart : cartReducer
    }
});

export default appStore;