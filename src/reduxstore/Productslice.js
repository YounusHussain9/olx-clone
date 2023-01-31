import { createSlice } from "@reduxjs/toolkit";

const initialState = {
products :[],
}


const Productslice = createSlice({
name:'Product',
initialState,
reducers :{
getProducts(state ,action){
state.products =action.payload
}
}
})


export const {getProducts} = Productslice.actions;
export default Productslice.reducer;