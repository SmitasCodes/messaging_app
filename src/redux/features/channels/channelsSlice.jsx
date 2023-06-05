import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    updateChannels: (state, action) =>{
      state.channels = action.payload;
    }
  },
});

export const { updateChannels } = channelsSlice.actions;

export default channelsSlice.reducer;