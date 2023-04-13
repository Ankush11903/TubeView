import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {"am":"asm"},
  reducers: {
    SetSearch: (state, action) => {
        // console.log("djv")
        // console.log(action.payload)
        // console.log(state.initialState)
        

      state.initialState=Object.assign(action.payload, state.initialState);
    },
  },
});

export const { SetSearch } = searchSlice.actions;
export default searchSlice.reducer;
