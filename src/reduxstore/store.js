import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Productslice";
import FetchsliceReducer from "./Fetchslice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    fetch: FetchsliceReducer,
  },
});

export default store;
