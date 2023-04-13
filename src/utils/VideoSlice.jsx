
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: "home",
};
const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setVideoState: (state, action) => {
            console.log("action.payload");
            console.log(action.payload);
            state.video = action.payload;
        }
    }
});
export const { setVideoState } = videoSlice.actions;
export default videoSlice.reducer;