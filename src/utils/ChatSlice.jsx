import { createSlice } from "@reduxjs/toolkit";
const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        Data: [],
    },
    reducers: {
        liveData: (state, action) => {
            state.Data.push(action.payload);
        }
    }
});
export const { liveData } = ChatSlice.actions;
export default ChatSlice.reducer;