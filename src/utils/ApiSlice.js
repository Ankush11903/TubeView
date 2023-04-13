import { createSlice } from "@reduxjs/toolkit";
const ApiSlice = createSlice({
    name: "api",
    initialState: {
        apiData: [],
    },
    reducers: {
        SetApi: (state, action) => {
            state.apiData += action.payload;
        }
    }
});
export const { SetApi } = ApiSlice.actions;
export default ApiSlice.reducer;