import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const STATUS = Object.freeze({
  IDle: "Idle",
});


const Fetchslice = createSlice({
  name: "fetchProduct",
  initialState:{
    products: [],
getPro:[],
    status: STATUS.IDle,
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },getProducts(state ,action){
      state.getPro.push(action.payload)
      }
  },
});

export const { setProducts ,getProducts } = Fetchslice.actions;
export default Fetchslice.reducer;

//THunk
export function FetchProducts(){
  return async function fetchThunk(dispatch, getState) {
    const request = await axios.get(`http://localhost:400/products?_sort=featured&_order=desc`);
    const response = await request;
    dispatch(setProducts(response.data));
  };
}
