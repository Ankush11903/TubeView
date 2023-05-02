import { configureStore } from "@reduxjs/toolkit";

import SideSlice from "./SideSlice";
import SearchSlice from "./SearchSlice";
import VideoSlice from "./VideoSlice";
import { YoutubeApi } from "./callApi";
import ImageSlice from "./ImageSlice";



const store = configureStore({
    reducer: {
        side: SideSlice, 
        search: SearchSlice,
        video: VideoSlice,
        image: ImageSlice,
        [YoutubeApi.reducerPath]: YoutubeApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(YoutubeApi.middleware),
});
export default store;