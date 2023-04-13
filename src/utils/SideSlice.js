import { createSlice } from "@reduxjs/toolkit";
const SideSlice = createSlice({
    name: "side",
    initialState: {
        isSideBarShown: true,
    },
    reducers: {
        SetSide: (state, action) => {
            state.isSideBarShown = action.payload;
        },
        setToggle: (state) => {
            state.isSideBarShown = !state.isSideBarShown;
        },
    }
});
export const { SetSide,setToggle } = SideSlice.actions;
export default SideSlice.reducer;
