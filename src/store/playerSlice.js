import { createActionCreatorInvariantMiddleware, createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name : 'player',
  initialState : {
    isPlaying : false,
    currentTime : 0,
    duration : 0,
    volume : 1.0,
    isTrackEnded : false,
    lastVolume : 1.0
  },
  reducers : {
    setIsPlaying : (state , action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTime : (state , action) => {
      state.currentTime = action.payload;
    },
    setDuration : (state , action) => {
      state.duration = action.payload;
    },
    setVolume : (state , action) => {
      state.volume = action.payload;
    },
    setIsTrackEnded : (state , action) => {
      state.isTrackEnded = action.payload;
    },
    setLastVolume : (state , action) => {
      state.lastVolume = action.payload;
    }
  }
})

export const {setIsPlaying , setCurrentTime , setDuration , setVolume , setIsTrackEnded , setLastVolume } = playerSlice.actions;
export default playerSlice.reducer;