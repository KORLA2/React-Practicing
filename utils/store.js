import { configureStore } from "@reduxjs/toolkit";
import cartingReducer from "./cartSlice"
  let store=configureStore({
    reducer:{
     cart:cartingReducer   
    }
})
export default store;