
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: "trending",
};
const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setVideoState: (state, action) => {
            state.video = action.payload;
        }
    }
});
export const { setVideoState } = videoSlice.actions;
export default videoSlice.reducer;