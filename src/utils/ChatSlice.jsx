import { createSlice } from "@reduxjs/toolkit";
const ChatSlice = createSlice({
    name: "ChatSlice",
    initialState: {
        Data: [],
    },
    reducers: {
        liveData: (state, action) => {
            if (state.Data.length > 270) {
                state.Data.pop();
              }
            state.Data.unshift(action.payload);
        }
    }
});
export const { liveData } = ChatSlice.actions;
export default ChatSlice.reducer;