import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../api/productApi/productSlice";



export const store = configureStore({
  reducer: {
    // [logInApiSlice.reducerPath]: logInApiSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(
      // logInApiSlice.middleware,
      productSlice.middleware,
      
    ),
});