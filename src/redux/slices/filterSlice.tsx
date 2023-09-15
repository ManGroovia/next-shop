import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: {
    name: "Популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
name: 'filters',
initialState,
reducers:{
setSortType(state,action){
    state.sort = action.payload
}
}
})


export const {setSortType} = filterSlice.actions

export default filterSlice.reducer