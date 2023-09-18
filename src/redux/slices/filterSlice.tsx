import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
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
},setCurrentPage(state,action){
  state.currentPage = action.payload
}
}
})


export const {setSortType,setCurrentPage} = filterSlice.actions

export default filterSlice.reducer