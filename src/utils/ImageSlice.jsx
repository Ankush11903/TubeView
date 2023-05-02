
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: {},
    
};
const ImageSlice = createSlice({
    name: "imageurl",
    initialState,
    reducers: {
        setVideoImage: (state, action) => {
            state.image = action.payload;
        }
    }
});
export const { setVideoState } = ImageSlice.actions;
export default ImageSlice.reducer;