import { configureStore } from "@reduxjs/toolkit";

import SideSlice from "./SideSlice";
import SearchSlice from "./SearchSlice";
import VideoSlice from "./VideoSlice";



const store = configureStore({
    reducer: {
        side: SideSlice, 
        search: SearchSlice,
        video: VideoSlice,
    },
});
export default store;