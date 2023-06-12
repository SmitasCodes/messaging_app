import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: [],
  currentChannelID: null,
};

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    updateChannels: (state, action) => {
      state.channels = action.payload;
    },
    setCurrentChannelID: (state, action) => {
      state.currentChannelID = action.payload;
    },
  },
});

export const { updateChannels, setCurrentChannelID } = channelsSlice.actions;

export default channelsSlice.reducer;
