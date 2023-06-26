import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
  currentChannel: [],
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    updateChannels: (state, action) => {
      state.channels = action.payload;
    },
    setCurrentChannel: (state, action) => {
      state.currentChannel = action.payload;
    },
  },
});

export const { updateChannels, setCurrentChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
